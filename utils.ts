import { decode } from 'bs58'
import { ethers } from 'ethers'

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc-mumbai.maticvigil.com/',
)

const MATIC_DECIMALS = 18

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

export const getCurrentBlock = async () => {
  const currentBlock = await provider.getBlockNumber()
  return currentBlock
}

export const getNetworkSecs = async () => {
  const currentBlock = await getCurrentBlock()
  const block = await provider.getBlock(currentBlock)
  return block.timestamp
}

export const formatCurrency = (amount: number | string) => {
  return Number(amount) / 10 ** MATIC_DECIMALS
}

export const parseCurrency = (amount: number | string) => {
  return Number(amount) * 10 ** MATIC_DECIMALS
}
