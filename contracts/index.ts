import stdlib from 'lib/reach'
import * as backend from 'contracts/index.main.mjs'
import { Track } from '@prisma/client'

const ROYALTY_CTC_ADDRESS = '0xaAe8892F6DA8EecF3507F38ECbf252F1d3979E32'
const MATIC_DECIMALS = 18

export const fmtNum = (n) => stdlib.bigNumberToNumber(n)
export const fmtCurrency = (amt) => stdlib.formatCurrency(amt, MATIC_DECIMALS)

type GlobalViews = {
  contractBalance: string
  membershipExp: number
  membershipCost: string
  votePeriodEndTime: number
  currentVotingPeriod: number
}

export type SongViews = {
  songId: number
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
  const songPayout = await ctc.v.getSongPayout(songId, vPeriod)
  const hasVoted = await ctc.v.hasVoted(songId, user)
  const views: SongViews = {
    songId,
    payout: songPayout[1] ? fmtCurrency(songPayout[1]) : '0',
    hasVoted: hasVoted[1],
  }
  return views
}

const getSongsState = async (reachAcc: any, tracks: Track[]) => {
  const songIds = tracks.map((t) => t.songId)
  const songsState = await Promise.all(
    songIds.map((id) => contract.getSongViews(id, 1, reachAcc)),
  )
  const fmtState = songsState.reduce((acc, song) => {
    acc[song.songId] = {
      payout: song.payout,
      hasVoted: song.hasVoted,
    }
    return acc
  }, {})
  return fmtState
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
  getSongsState,
}

export default contract
