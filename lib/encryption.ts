import { HDKey, Mnemonic } from 'wallet.ts'
import { randomBytes } from 'crypto'
import { AES, enc } from 'crypto-js'
import algosdk from 'algosdk'

const { DEK, KEK } = process.env

type CondensedHDKey = {
  index: number
  xprv: string
  xpub: string
  prv?: Uint8Array
  pub?: Uint8Array
}

type MDKOpts = {
  /** Mnemonic passphrase */
  seedphrase?: string
  epk?: string
}

const ALGO_DERIVATION_PATH = `m/44'/283'/0'/0`

const MASTER_DEK = AES.decrypt(DEK, KEK).toString(enc.Utf8)

/**
 * Encrypt a value using `Crypto.AES`. Symmetric (reversible) encryption
 * @param val Value to encrypt
 * @returns Error or encrypted string
 */
function encryptAES(val: string) {
  return AES.encrypt(val, MASTER_DEK).toString()
}

/**
 * Decrypt a value using `Crypto.AES`
 * @param val String to decrypt
 * @returns Decrypted string or Error
 */
export function decryptAES(val: string) {
  return AES.decrypt(val, MASTER_DEK).toString(enc.Utf8)
}

/** Condense HDKey to usable components */
function compressHDKey(val: HDKey, includePub = false): CondensedHDKey {
  const compressed: CondensedHDKey = {
    index: val.index,
    xprv: val.extendedPrivateKey as string,
    xpub: val.extendedPublicKey,
  }

  if (includePub) {
    compressed.prv = val.privateKey as Uint8Array
    compressed.pub = val.publicKey
  }

  return compressed
}

/**
 * Generate a master `seed phrase`. Returns a class instance that can
 * be represented as a list of words.
 *
 * The default value is a 24-word mnemonic generated from a 32-character random
 * byte sequence. The number of byte-characters must be a multiple of
 * `4`; the resulting mnemonic will be `length * 0.75` words long (e.g.
 * `randomBytes(64)` will give you `48` words)
 *
 * This value MUST be encrypted in storage.
 */
function generateMnemonic(bytesLength = 32) {
  return Mnemonic.generate(randomBytes(bytesLength))
}

/**
 * Generate a Master Derivation key from a seed phrase or extended private key.
 * The `m/44'/x'/...` derivation path will be chain-specific: this is achieved by
 * matching the chain symbol (e.g. `ALGO`) to its indexed value in the
 * `BIP44-constants` array
 *
 * If neither `seedphrase` nor `epk` are provided, a random mnemonic will
 * be generated and used when the function is called.
 *
 * @param opts Options for generating path
 * @param opts.seedphrase (Optional) Master Mnemonic.
 * @param opts.epk (Optional) Extended private key.
 * @returns Master derivation key
 */
function createMasterDerivationKey(opts: MDKOpts = {}): HDKey {
  let result: HDKey

  // Generate using extended private key (assume EPK is root account)
  if (opts.epk) {
    result = HDKey.parseExtendedKey(opts.epk)
    if (!result) throw new Error('Invalid EPK supplied')
  } else {
    const { seedphrase = null } = opts
    const fromMS = (v: any) => HDKey.parseMasterSeed(v)
    const fb = generateMnemonic()

    // Generate using provided or fallback mnemonic
    if (seedphrase) {
      const mnm = Mnemonic.parse(seedphrase)
      if (!mnm) throw new Error('Invalid seedphrase provided')
      result = fromMS(mnm.toSeed())
    } else result = fromMS(fb.toSeed())
  }

  return result
}

/**
 * Generate a chain-specific wallet, which will contain accounts
 * and funds for that chain (e.g. `ALGO` or `ETH`)
 * @param epk User's (master) Extended Private Key
 * @param chain Target chain where wallet will be derived.
 * @returns `HDKey` containing secret and public keys for wallet
 */
export function deriveChainWallet(epk: string) {
  if (!epk) throw new Error('Master EPK is required')

  const mdk = createMasterDerivationKey({ epk })
  if (!mdk.extendedPrivateKey) throw new Error('Invalid EPK supplied')

  // Derive key for wallet's blockchain
  const chainRoot = mdk.derive(ALGO_DERIVATION_PATH)

  // From blockchain, derive key for all-wallets root
  const walletRoot = chainRoot.derive('0')
  const { extendedPrivateKey } = walletRoot

  // Derive and return wallet key
  if (extendedPrivateKey) return walletRoot

  throw new Error('Invalid EPK supplied')
}

/**
 * returnsan an account with the public Address of said account
 * @param epk extended private key (this can be derived by decrypting the user MDK)
 * @param accountIndex index of the account
 * @returns an account object with the address - we have access to secret key as well, but not returning it for obvious reasons
 */
export function getWalletFromMdk(mdk: string) {
  const ACCOUNT_INDEX = 0
  const epk = decryptAES(mdk)
  const wallet = deriveChainWallet(epk)
  const fmtIndex: string = ACCOUNT_INDEX.toString()
  const { extendedPrivateKey } = wallet.derive(fmtIndex)
  if (!extendedPrivateKey) throw new Error('No private key')
  const sk = new TextEncoder().encode(extendedPrivateKey)
  const algoMnemonic = algosdk.secretKeyToMnemonic(sk)
  const account = algosdk.mnemonicToSecretKey(algoMnemonic)
  return account
}

export function generateWalletMdk() {
  const { xprv } = compressHDKey(createMasterDerivationKey())
  const mdk = encryptAES(xprv)
  return mdk
}
