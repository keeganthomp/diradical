// disable tslint for this file
/* tslint:disable */
// @ts-ignore

import { ethers } from 'ethers'
import { encode, decode } from 'bs58'
import contentHash from 'content-hash'

export const numberToBigNumber = (arg: number) => {
  ethers.BigNumber.from(arg)
}

export const encodeString = (arg: string) => {
  return ethers.utils.formatBytes32String(arg)
}

/**
 * Converts IPFS CID version 0 (Base58) to a 32 bytes hex string and adds initial 0x.
 * @param cid - The 46 character long IPFS CID V0 string (starts with Qm).
 * @returns string
 */
export function convertIpfsCidV0ToByte32(cid: string) {
  const g = '0x' + Buffer.from(decode(cid).slice(2)).toString('hex')
  console.log('ggg', g)
  const cidV1 = contentHash.helpers.cidV0ToV1Base32(cid).toString('hex')
  return g
}

//truncate wallet address to 6 characters
export const truncateWalletAddress = (address: string) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}
