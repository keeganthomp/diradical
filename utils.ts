import { decode } from 'bs58'
import { loadStdlib } from '@reach-sh/stdlib'

const stdlib = loadStdlib('ETH')

/**
 * Converts IPFS CID version 0 (Base58) to a 32 bytes hex string and adds initial 0x.
 * @param cid - The 46 character long IPFS CID V0 string (starts with Qm).
 * @returns string
 */
export function convertIpfsCidV0ToByte32(cid: string) {
  return '0x' + Buffer.from(decode(cid).slice(2)).toString('hex')
}

//truncate wallet address to 6 characters
export const truncateWalletAddress = (address: string) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

export const getNetworkSecs = async () => {
  const rawTime = await stdlib.getNetworkSecs()
  const fmtTime = stdlib.bigNumberToNumber(rawTime)
  return fmtTime
}

export const getCurrentBlock = async () => {
  const rawBlock = await stdlib.getNetworkTime()
  const fmtBlock = stdlib.bigNumberToNumber(rawBlock)
  return fmtBlock
}

export const formatCurrency = (amount: number | string) => {
  return stdlib.formatWithDecimals(stdlib.bigNumberify(amount), 18)
}

export const parseCurrency = (amount: number | string) => {
  return stdlib.parseCurrency(amount)
}
