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

const ROYALTY_CTC_ADDRESS = '0xB75C2cb08D1fFf1F09f2Ac88487000797fEDDeA9'

const DEFAULT_GAS_LIMIT = 5_000_000

const useContract = () => {
  const [isFetchingViews, setFetching] = useState(false)
  const { web3, walletAddress } = useMagicWallet()
  const [views, setContractData] = useRecoilState(contractViewState)
  const { register } = useApi()

  if (!web3) return null

  const contract = new web3.eth.Contract(abi, ROYALTY_CTC_ADDRESS)

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
    getSong: ctcGetSong,
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

  const addSong = async (
    artIPFSHash: string,
    audioIPFSHASH: string,
    cb: (songId: number | string) => void,
  ) => {
    if (!walletAddress) return
    const [artBytes32, audioBytes32] = [
      convertIpfsCidV0ToByte32(artIPFSHash),
      convertIpfsCidV0ToByte32(audioIPFSHASH),
    ]
    const method = () => ctcAddSong(artBytes32, audioBytes32)
    await method()
      .send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice: await web3.eth.getGasPrice(),
      })
      .on('receipt', async (receipt) => {
        const {
          events: {
            songAdded: { returnValues },
          },
        } = receipt
        const songId = Number(returnValues[0])
        await cb(songId)
      })
      .on('error', (_, receipt) => {
        console.log('Error Adding Song:', receipt)
      })
  }

  const buyMembership = async () => {
    if (!walletAddress) return
    const method = () => ctcBuyMembership()
    await method()
      .send({
        value: parseCurrency(views.membershipCost),
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice: await web3.eth.getGasPrice(),
      })
      .on('receipt', async function (receipt) {
        const {
          events: {
            membershipPurchased: { returnValues },
          },
        } = receipt
        const membershipExp = Number(returnValues[1])
        await register(walletAddress, membershipExp)
      })
      .on('error', function (_, receipt) {
        console.log('Error Buying Membership:', receipt)
      })
  }

  const vote = async (
    artist: string,
    cb: (wallet: string, votedPeriod: number) => void,
  ) => {
    if (!walletAddress) return
    const method = () => ctcVote(artist)
    await method()
      .send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice: await web3.eth.getGasPrice(),
      })
      .on('receipt', async (receipt) => {
        const {
          events: {
            voted: { returnValues },
          },
        } = receipt
        const votedPeriod = Number(returnValues[1])
        await cb(walletAddress, votedPeriod)
      })
      .on('error', function (_, receipt) {
        console.log('Error voting:', receipt)
      })
  }

  const endVotingPeriod = async () => {
    if (!walletAddress) return
    const method = () => ctcEndVotingPeriod()
    await method()
      .send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice: await web3.eth.getGasPrice(),
      })
      .on('receipt', async (receipt) => {
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
      })
      .on('error', function (_, receipt) {
        console.log('Error ending voting period:', receipt)
      })
  }

  const receivePayout = async (vPeriod: number) => {
    if (!walletAddress) return
    const method = () => ctcReceivePayout(vPeriod)
    await method()
      .send({
        from: walletAddress,
        gas: DEFAULT_GAS_LIMIT,
        gasPrice: await web3.eth.getGasPrice(),
      })
      .on('receipt', async (receipt) => {
        console.log('Received payout!', receipt)
      })
      .on('error', function (_, receipt) {
        console.log('Error receiving payout:', receipt)
      })
  }

  return {
    addSong,
    buyMembership,
    endVotingPeriod,
    vote,
    receivePayout,
    getSongInfo,
    isFetchingViews,
    ...views,
  }
}

export default useContract
