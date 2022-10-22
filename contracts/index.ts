import { loadStdlib } from '@reach-sh/stdlib'
import algosdk from 'algosdk'
import { getWalletFromMdk } from 'lib/encryption'
import * as backend from './index.song.mjs'

const stdlib = loadStdlib('ALGO')
stdlib.setProviderByName('TestNet')

const getAccountFromMdk = async (mdk) => {
  const wallet = getWalletFromMdk(mdk)
  const mnemonic = algosdk.secretKeyToMnemonic(wallet.sk)
  const acc: any = await stdlib.newAccountFromMnemonic(mnemonic)
  return acc
}

export const launchSongCtc = async (
  mdk: string,
  audioIpfsCid: string,
  coverArtIpfsHash: string,
) => {
  const acc: any = await getAccountFromMdk(mdk)
  const ctc = acc.contract(backend)
  await stdlib.withDisconnect(() =>
    ctc.p.Creator({
      art: coverArtIpfsHash,
      audio: audioIpfsCid,
      ready: stdlib.disconnect,
    }),
  )
  const ctcInfo = await ctc.getInfo()
  const contractAddress = stdlib.bigNumberToNumber(ctcInfo)
  return contractAddress
}

export const makeSharesAvailable = async (
  mdk: string,
  ctcAddress: number,
  numOfShares: number,
  pps: number // in microAlgos - 1 = 0.000001 ALGO
) => {
  const acc: any = await getAccountFromMdk(mdk)
  const ctc = acc.contract(backend, ctcAddress)
  const numOfSharesAvailable = stdlib.bigNumberify(numOfShares)
  const pricePerShare = stdlib.bigNumberify(pps)
  await ctc.a.makeSharesAvailable(numOfSharesAvailable, pricePerShare)
}


export const purschaseShares = async (
  mdk: string,
  ctcAddress: number,
  numOfShares: number,
) => {
  const acc: any = await getAccountFromMdk(mdk)
  const ctc = acc.contract(backend, ctcAddress)
  const numOfSharesToPurchase = stdlib.bigNumberify(numOfShares)
  await ctc.a.purchaseShares(numOfSharesToPurchase)
}
