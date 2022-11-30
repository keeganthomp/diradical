import stdlib from 'lib/reach'
import * as backend from 'contracts/index.main.mjs'

const ROYALTY_CTC_ADDRESS = '0xad013c906911a1116C43aF66dA48F6b29b7dED07'
const MATIC_DECIMALS = 18

export const fmtNum = (n) => stdlib.bigNumberToNumber(n)
export const fmtCurrency = (amt) => stdlib.formatCurrency(amt, MATIC_DECIMALS)

type SongFromCtc = {
  id: number
  creator: string
  art: string
  audio: string
  votes: number
}

type GlobalViews = {
  contractBalance: string
  membershipExp: number
  membershipCost: string
  votePeriodEndTime: number
  currentVotingPeriod: number
}

export type SongViews = {
  songId: number
  song: SongFromCtc
  payout: string
  hasVoted: boolean
}

const getGlobalViews = async (acc: any) => {
  const ctc = acc.contract(backend, ROYALTY_CTC_ADDRESS)
  const contractBalance = await ctc.v.getContractBalance() // total balance in contract
  const membershipExp = await ctc.v.getMembershipExp(acc.networkAccount.address) // membership expiration
  const membershipCost = await ctc.v.getMembershipCost()
  const votEndTime = await ctc.v.getPeriodEndTime()
  const currentVotingPeriod = await ctc.v.getCurrentVotingPeriod()
  const views: GlobalViews = {
    contractBalance: contractBalance[1] ? fmtCurrency(contractBalance[1]) : '0',
    membershipCost: membershipCost[1] ? fmtCurrency(membershipCost[1]) : '0',
    membershipExp: membershipExp[1] ? fmtNum(membershipExp[1]) : 0,
    votePeriodEndTime: votEndTime[1] ? fmtNum(votEndTime[1]) : 0,
    currentVotingPeriod: currentVotingPeriod[1]
      ? fmtNum(currentVotingPeriod[1])
      : 0,
  }
  return views
}

const getSongViews = async (songId: number, vPeriod: number, user: any) => {
  const ctc = user.contract(backend, ROYALTY_CTC_ADDRESS)
  const song = await ctc.v.getSong(songId)
  const songPayout = await ctc.v.getSongPayout(songId, vPeriod)
  const hasVoted = await ctc.v.hasVoted(songId, user)
  const views: SongViews = {
    songId,
    song: song[1],
    payout: songPayout[1] ? fmtCurrency(songPayout[1]) : '0',
    hasVoted: hasVoted[1],
  }
  return views
}

const buyMembership = async (acc: any) => {
  const ctc = acc.contract(backend, ROYALTY_CTC_ADDRESS)
  const exp = await ctc.a.buyMembership()
  return fmtNum(exp)
}
const addSong = async (
  acc: any,
  audioIPFSHash: string,
  songIPFSHash: string,
) => {
  const ctc = acc.contract(backend, ROYALTY_CTC_ADDRESS)
  return ctc.a.addSong(audioIPFSHash, songIPFSHash)
}
const receivePayout = async (acc: any, songId: number) => {
  const ctc = acc.contract(backend, ROYALTY_CTC_ADDRESS)
  return ctc.a.getRoyalties(songId)
}
const endVotingPeriod = async (acc: any, songId: number) => {
  const ctc = acc.contract(backend, ROYALTY_CTC_ADDRESS)
  return ctc.a.endVotingPeriod(songId)
}
const vote = async (acc, songId: number) => {
  const ctc = acc.contract(backend, ROYALTY_CTC_ADDRESS)
  await ctc.a.vote(songId)
}

const contract = {
  getGlobalViews,
  getSongViews,
  buyMembership,
  addSong,
  receivePayout,
  endVotingPeriod,
  vote,
}

export default contract
