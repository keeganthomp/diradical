import stdlib from 'lib/reach'
import algosdk from 'algosdk'
import { getWalletFromMdk } from 'lib/encryption'
import * as backend from './index.song.mjs'

const getAccountFromMdk = async (mdk: string) => {
  const wallet = getWalletFromMdk(mdk)
  const mnemonic = algosdk.secretKeyToMnemonic(wallet.sk)
  const acc: any = await stdlib.newAccountFromMnemonic(mnemonic)
  return acc
}

const optinToAsset = async (mdk: string, tokId: number) => {
  try {
    const acc = await getAccountFromMdk(mdk)
    await acc.tokenAccept(tokId)
  } catch (err) {
    console.log('Unable to optin to token:', err)
  }
}

type launchSongCtcProps = {
  mdk: string
  audioIpfsCid: string
  coverArtIpfsCid: string
}
export const launchSongCtc = async (props: launchSongCtcProps) => {
  try {
    const acc: any = await getAccountFromMdk(props.mdk)
    const ctc = acc.contract(backend)
    await stdlib.withDisconnect(() =>
      ctc.p.Creator({
        art: props.coverArtIpfsCid,
        audio: props.audioIpfsCid,
        ready: stdlib.disconnect,
      }),
    )
    const ctcInfo = await ctc.getInfo()
    const ownershipTok = await ctc.v.ownershipTokId()
    await optinToAsset(props.mdk, stdlib.bigNumberToNumber(ownershipTok[1]))
    const contractAddress = stdlib.bigNumberToNumber(ctcInfo)
    return contractAddress
  } catch (err) {
    throw new Error(err.message)
  }
}

type OpenToPublicProps = {
  mdk: string
  ctcAddress: number
  amtOfTokensToRetain: number // in mAlgo
  totalValue: number // in mAlgo
}
export const openToPublic = async (props: OpenToPublicProps) => {
  const acc: any = await getAccountFromMdk(props.mdk)
  const ctc = acc.contract(backend, props.ctcAddress)
  const amtToRetain = stdlib.bigNumberify(props.amtOfTokensToRetain)
  const totalValue = stdlib.bigNumberify(props.totalValue)
  await ctc.a.openToPublic(amtToRetain, totalValue)
}

type PurchaseSharesProps = {
  mdk: string
  ctcAddress: number
  amtOfTokensToPurchase: number // in mAlgo
}
export const purchaseOwnership = async (props: PurchaseSharesProps) => {
  const acc: any = await getAccountFromMdk(props.mdk)
  const ctc = acc.contract(backend, props.ctcAddress)
  const ownershipTok = await ctc.v.ownershipTokId()
  await optinToAsset(props.mdk, stdlib.bigNumberToNumber(ownershipTok[1]))
  const amtToPurchase = stdlib.bigNumberify(props.amtOfTokensToPurchase)
  await ctc.a.purchaseOwnership(amtToPurchase)
}
