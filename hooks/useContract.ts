import * as backend from 'contracts/index.main.mjs'
import { convertIpfsCidV0ToByte32 } from 'utils'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import contractViewState from 'atoms/contract'
import {
  getNetworkSecs,
  getCurrentBlock,
  formatCurrency,
  parseCurrency,
} from 'utils'
import useApi from './useApi'
import useMagicWallet from './useMagicWallet'

const abi = JSON.parse(backend._Connectors.ETH.ABI)

const ROYALTY_CTC_ADDRESS = '0x3f0fB8B9e81D5cf4ec80DD538525B1C20ab3f8e5'

const DEFAULT_GAS_LIMIT = 5_000_000

const useContract = () => {
  const [isFetchingViews, setFetching] = useState(false)
  const { web3, walletAddress } = useMagicWallet()
  const [views, setContractData] = useRecoilState(contractViewState)
  const { register, addPayout } = useApi()

  if (!web3) return null

  const contract = new web3.eth.Contract(abi, ROYALTY_CTC_ADDRESS)
  const getGasPrice = async () => await web3.eth.getGasPrice()

  const {
    addSong: ctcAddSong,
    buyMembership: ctcBuyMembership,
    vote: ctcVote,
    endVotingPeriod: ctcEndVotingPeriod,
    receivePayout: ctcReceivePayout,
    getCurrentVotingPeriod,
    getMembershipCost,
    getPeriodEndTime,
    getOwnerPayout: ctcGetOwnerPayout,
    getPeriodPayouts: ctcGetPeriodPayouts,
    getPeriodVotes: ctcGetPeriodVotes,
    getPeriodMembers: ctcGetPeriodMembers,
  } = contract.methods

  // fetch global views
  useEffect(() => {
    const asyncGetCtcData = async () => {
      setFetching(true)
      const votingPeriod = await getCurrentVotingPeriod().call()
      const membershipCost = await getMembershipCost().call()
      const endPeriodTime = await getPeriodEndTime().call()
      setContractData({
        currentBlock: await getCurrentBlock(),
        currentSecs: await getNetworkSecs(),
        votingPeriod: Number(votingPeriod),
        membershipCost: formatCurrency(membershipCost),
        endPeriodTime: Number(endPeriodTime),
      })
      setFetching(false)
    }
    asyncGetCtcData()
  }, [])

  const getSongInfo = async (owner: string, vPeriod: number) => {
    try {
      const songPayout = await ctcGetOwnerPayout(owner, vPeriod).call()
      return {
        payout: Number(songPayout),
      }
    } catch (err) {
      console.log('Error getting song info', err)
    }
  }

  const getSeasonInfo = async (vPeriod: number) => {
    try {
      const seasonPayout = await ctcGetPeriodPayouts(vPeriod).call()
      const seasonVotes = await ctcGetPeriodVotes().call()
      const seasonMembers = await ctcGetPeriodMembers().call()
      return {
        payout: Number(seasonPayout),
        votes: Number(seasonVotes),
        members: Number(seasonMembers),
      }
    } catch (err) {
      console.log('Error getting season info', err)
    }
  }

  const addSong = async (
    artIPFSHash: string,
    audioIPFSHASH: string,
    cb: (songId: number | string) => void,
  ) => {
    if (!walletAddress) return
    const gasPrice = await getGasPrice()
    const [artBytes32, audioBytes32] = [
      convertIpfsCidV0ToByte32(artIPFSHash),
      convertIpfsCidV0ToByte32(audioIPFSHASH),
    ]
    const method = () => ctcAddSong(artBytes32, audioBytes32)
    try {
      const receipt = await method().send({
        gasPrice,
      })
      const {
        events: {
          songAdded: { returnValues },
        },
      } = receipt
      const songId = Number(returnValues[0])
      await cb(songId)
    } catch (err) {
      console.log('Error adding song', err)
    }
  }

  const buyMembership = async () => {
    if (!walletAddress) return
    const gasPrice = await getGasPrice()
    try {
      const receipt = await ctcBuyMembership().send({
        value: parseCurrency(views.membershipCost),
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice,
      })
      const {
        events: {
          membershipPurchased: { returnValues },
        },
      } = receipt
      const membershipExp = Number(returnValues[1])
      await register(walletAddress, membershipExp)
    } catch (err) {
      console.log('Error buying membership', err)
    }
  }

  const vote = async (
    artist: string,
    cb: (wallet: string, votedPeriod: number) => void,
  ) => {
    if (!walletAddress) return
    const gasPrice = await getGasPrice()
    try {
      const receipt = await ctcVote(artist).send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice,
      })
      const {
        events: {
          voted: { returnValues },
        },
      } = receipt
      const votedPeriod = Number(returnValues[1])
      await cb(walletAddress, votedPeriod)
    } catch (err) {
      console.log('Error voting', err)
    }
  }

  const endVotingPeriod = async () => {
    if (!walletAddress) return
    const gasPrice = await getGasPrice()
    try {
      const receipt = await ctcEndVotingPeriod().send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice,
      })
      const {
        events: {
          endedVotingPeriod: { returnValues },
        },
      } = receipt
      const endPeriodTime = await getPeriodEndTime().call()
      const currentTime = await getNetworkSecs()
      setContractData({
        ...views,
        votingPeriod: Number(returnValues[0]) + 1,
        endPeriodTime: Number(endPeriodTime),
        currentSecs: currentTime,
      })
    } catch (err) {
      console.log('Error ending voting period', err)
    }
  }

  const receivePayout = async (vPeriod: number) => {
    if (!walletAddress) return
    const gasPrice = await getGasPrice()
    try {
      const receipt = await ctcReceivePayout(vPeriod).send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice,
      })
      const {
        events: {
          payoutReceived: { returnValues },
        },
      } = receipt
      const receiver = returnValues[0]
      const season = Number(returnValues[1])
      const amount = Number(returnValues[2])
      await addPayout(receiver, amount, season)
    } catch (err) {
      console.log('Error receiving payout', err)
    }
  }

  return {
    addSong,
    buyMembership,
    endVotingPeriod,
    vote,
    receivePayout,
    getSongInfo,
    isFetchingViews,
    getSeasonInfo,
    ...views,
  }
}

export default useContract
