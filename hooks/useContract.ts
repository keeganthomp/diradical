import * as backend from 'contracts/index.main.mjs'
import { convertIpfsCidV0ToByte32 } from 'utils'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import contractViewState from 'atoms/contract'
import { getNetworkSecs, formatCurrency } from 'utils'
import { ErrorMessage } from 'types'
import Web3 from 'web3'
import { polygonNodeOptions } from 'lib/magic'
import { Magic } from 'magic-sdk'
import useApi from './useApi'
import useMagicWallet from './useWallet'
import useUser from './useUser'

const abi = JSON.parse(backend._Connectors.ETH.ABI)

const { NEXT_PUBLIC_ROYALTY_CTC_ADDRESS } = process.env

const DEFAULT_GAS_LIMIT = 5_000_000

const useContract = () => {
  const [isProcessing, setProcessing] = useState(false)
  const [isFetchingViews, setFetching] = useState(false)
  const { walletAddress } = useMagicWallet()
  const [views, setViews] = useRecoilState(contractViewState)
  const { register, addPayout, addVote } = useApi()
  const { user } = useUser()

  if (typeof window === 'undefined') return {} as any // ensure code is client side

  const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
    network: polygonNodeOptions,
  })
  const web3 = new Web3(magic.rpcProvider as any)
  const contract = new web3.eth.Contract(abi, NEXT_PUBLIC_ROYALTY_CTC_ADDRESS)

  const getGasPrice = async () => await web3.eth.getGasPrice()

  const {
    addSong: ctcAddSong,
    buyMembership: ctcBuyMembership,
    vote: ctcVote,
    endVotingPeriod: ctcEndVotingPeriod,
    receivePayout: ctcReceivePayout,
    getMembershipCost,
    getPeriodEndTime,
  } = contract.methods

  const checkIfPeriodEnded = async () => {
    const currentSecs = await getNetworkSecs()
    const endPeriodBlock = await contract.methods.getPeriodEndTime().call()
    return currentSecs >= endPeriodBlock
  }

  // fetch global views
  useEffect(() => {
    const asyncGetCtcData = async () => {
      setFetching(true)
      const membershipCost = await getMembershipCost().call()
      setViews({
        membershipCost: formatCurrency(membershipCost),
      })
      setFetching(false)
    }
    asyncGetCtcData()
  }, [])

  const addSong = async (artIPFSHash: string, audioIPFSHASH: string) => {
    if (!walletAddress || !user) return
    setProcessing(true)
    const hasPeriodEnded = await checkIfPeriodEnded()
    if (hasPeriodEnded) {
      setProcessing(false)
      throw new Error(ErrorMessage.SEASON_OVER)
    }
    const [artBytes32, audioBytes32] = [
      convertIpfsCidV0ToByte32(artIPFSHash),
      convertIpfsCidV0ToByte32(audioIPFSHASH),
    ]
    try {
      const gasPrice = await getGasPrice()
      const receipt = await ctcAddSong(artBytes32, audioBytes32).send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice,
      })
      const {
        events: {
          songAdded: { returnValues },
        },
      } = receipt
      const songId = Number(returnValues[0])
      return songId
    } catch (err) {
      throw new Error(err)
    }
  }

  const buyMembership = async () => {
    if (!walletAddress) return
    setProcessing(true)
    const hasPeriodEnded = await checkIfPeriodEnded()
    if (hasPeriodEnded) {
      setProcessing(false)
      throw new Error(ErrorMessage.SEASON_NOT_OVER)
    }
    try {
      const membershipCost = await getMembershipCost().call()
      const gasPrice = await getGasPrice()
      const receipt = await ctcBuyMembership().send({
        value: membershipCost,
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
      console.log('error buying membership', err)
    } finally {
      setProcessing(false)
    }
  }

  const vote = async (artist: string) => {
    if (!walletAddress) return
    setProcessing(true)
    try {
      const gasPrice = await getGasPrice()
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
      await addVote(walletAddress, artist, votedPeriod)
    } catch (err) {
      console.log('error voting', err)
    } finally {
      setProcessing(false)
    }
  }

  const endVotingPeriod = async () => {
    if (!walletAddress) return
    setProcessing(true)
    const currentSecs = await getNetworkSecs()
    const endPeriodTime = await getPeriodEndTime().call()
    const fmtEndPriosTime = Number(endPeriodTime)
    if (fmtEndPriosTime > currentSecs) {
      setProcessing(false)
      throw new Error(ErrorMessage.SEASON_NOT_OVER)
    }
    try {
      const gasPrice = await getGasPrice()
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
      return {
        newSeason: Number(returnValues[0]) + 1,
        newEnd: Number(endPeriodTime),
      }
    } catch (err) {
      console.log('Error ending voting period', err)
    } finally {
      setProcessing(false)
    }
  }

  const receivePayout = async (vPeriod: number) => {
    if (!walletAddress) return
    setProcessing(true)
    try {
      const gasPrice = await getGasPrice()
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
    } finally {
      setProcessing(false)
    }
  }

  return {
    addSong,
    buyMembership,
    endVotingPeriod,
    vote,
    receivePayout,
    isFetchingViews,
    isProcessing,
    checkIfPeriodEnded,
    getNetworkSecs,
    ...views,
  }
}

export default useContract
