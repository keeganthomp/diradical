import { loadStdlib, unsafeAllowMultipleStdlibs } from '@reach-sh/stdlib'
import { ethers } from 'ethers'

unsafeAllowMultipleStdlibs()

export const POLYGON_TESTNET = 'https://rpc-mumbai.maticvigil.com/'
export const provider: any = new ethers.providers.JsonRpcProvider(
  POLYGON_TESTNET,
)

export const truncateAddress = (address: string) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

const stdlib = loadStdlib('ETH')

export default stdlib
