import * as backend from 'contracts/index.main.mjs'
import { convertIpfsCidV0ToByte32 } from 'utils'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import contractViewState from 'atoms/contract'
import { getNetworkSecs, getCurrentBlock } from 'utils'
import useApi from './useApi'
import useMagicWallet from './useMagicWallet'

const abi = JSON.parse(backend._Connectors.ETH.ABI)

const ROYALTY_CTC_ADDRESS = '0xf7f697553f928A43887602dB33434478fF5092D0'

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
    getContractBalance,
    getMembershipCost,
    getPeriodEndTime,
    getMembershipExp,
  } = contract.methods

  // fetch global views
  useEffect(() => {
    const asyncGetCtcData = async () => {
      setFetching(true)
      const votingPeriod = await getCurrentVotingPeriod().call()
      const ctcBal = await getContractBalance().call()
      const membershipCost = await getMembershipCost().call()
      const endPeriodTime = await getPeriodEndTime().call()
      setContractData({
        currentBlock: await getCurrentBlock(),
        currentSecs: await getNetworkSecs(),
        votingPeriod: Number(votingPeriod),
        contractBalance: Number(ctcBal),
        membershipCost: Number(membershipCost),
        endPeriodTime: Number(endPeriodTime),
      })
      setFetching(false)
    }
    asyncGetCtcData()
  }, [])

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
      .on('error', (err) => {
        console.log('Error Adding Song:', err)
      })
  }

  const buyMembership = async () => {
    if (!walletAddress) return
    const method = () => ctcBuyMembership()
    await method()
      .send({
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
      .on('error', function (error) {
        console.log('Error Buying Membership:', error)
      })
  }

  const vote = async (
    songId: number,
    cb: (wallet: string, votedPeriod: number) => void,
  ) => {
    if (!walletAddress) return
    const method = () => ctcVote(songId)
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
        const songId = Number(returnValues[1])
        const votedPeriod = Number(returnValues[2])
        console.log({
          songId,
          votedPeriod,
        })
        await cb(walletAddress, votedPeriod)
      })
      .on('error', function (error) {
        console.log('Error voting:', error)
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
        setContractData({
          ...views,
          votingPeriod: Number(returnValues[0]) + 1,
        })
      })
      .on('error', function (error) {
        console.log('Error ending voting period:', error)
      })
  }

  const receivePayout = async (songId: number, vPeriod: number) => {
    if (!walletAddress) return
    const method = () => ctcReceivePayout(songId, vPeriod)
    const gasLimit = await method().estimateGas({})
    console.log('dynamic gas limit', gasLimit)
    await method()
      .send({
        from: walletAddress,
        gas: gasLimit,
        gasPrice: await web3.eth.getGasPrice(),
      })
      .on('receipt', async (receipt) => {
        console.log('Received payout!', receipt)
      })
      .on('error', function (error) {
        console.log('Error receiving payout:', error)
      })
  }

  return {
    addSong,
    buyMembership,
    endVotingPeriod,
    vote,
    receivePayout,
    isFetchingViews,
    ...views,
  }
}

export default useContract
