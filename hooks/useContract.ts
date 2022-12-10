import * as backend from 'contracts/index.main.mjs'
import { convertIpfsCidV0ToByte32 } from 'utils'
import useApi from './useApi'
import useMagicWallet from './useMagicWallet'

const abi = JSON.parse(backend._Connectors.ETH.ABI)
const ROYALTY_CTC_ADDRESS = '0xc5bb297d845F366933Cf2463896B744E53D0bafb'

type ContractViews =
  | 'getSong'
  | 'getPeriodEndTime'
  | 'getContractBalance'
  | 'getSongPayout'
  | 'getMembershipExp'
  | 'getCurrentVotingPeriod'
  | 'getMembershipCost'
  | 'hasVoted'

const DEFAULT_GAS_LIMIT = 5_000_000

const useContract = () => {
  const { register, addVote } = useApi()
  const { web3, walletAddress } = useMagicWallet()
  if (!web3) return
  const contract = new web3.eth.Contract(abi, ROYALTY_CTC_ADDRESS)

  const getContractView = async (method: ContractViews) => {
    if (!walletAddress) return
    const viewMethod = contract.methods[method]
    const result = await viewMethod().call()
    console.log('view result', result)
    return result
  }

  const {
    addSong: ctcAddSong,
    buyMembership: ctcBuyMembership,
    vote: ctcVote,
    endVotingPeriod: ctcEndVotingPeriod,
    receivePayout: ctcReceivePayout,
  } = contract.methods

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
        console.log('Ended voting period!', receipt)
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
    getContractView,
    buyMembership,
    endVotingPeriod,
    vote,
    receivePayout,
  }
}

export default useContract
