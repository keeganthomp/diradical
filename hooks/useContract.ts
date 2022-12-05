import * as backend from 'contracts/index.main.mjs'
import { convertIpfsCidV0ToByte32 } from 'utils'
import useMagicWallet from './useMagicWallet'

const abi = JSON.parse(backend._Connectors.ETH.ABI)
const ROYALTY_CTC_ADDRESS = '0xAc452fB4bb095052C9173Ee098060c38Cb89631d'

type ContractViews =
  | 'getSong'
  | 'getPeriodEndTime'
  | 'getContractBalance'
  | 'getSongPayout'
  | 'getMembershipExp'
  | 'getCurrentVotingPeriod'
  | 'getMembershipCost'
  | 'hasVoted'

const DEFAULT_GAS_LIMIT = 5000000

const useContract = () => {
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

  const addSong = async (artIPFSHash: string, audioIPFSHASH: string) => {
    if (!walletAddress) return
    const [artBytes32, audioBytes32] = [
      convertIpfsCidV0ToByte32(artIPFSHash),
      convertIpfsCidV0ToByte32(audioIPFSHASH),
    ]
    const { addSong } = contract.methods
    const method = () => addSong(artBytes32, audioBytes32)
    // this fails here for some reason
    // const gasLimit = await method().estimateGas({})
    const {
      events: { songAdded },
    } = await method().send({
      from: walletAddress,
      gas: DEFAULT_GAS_LIMIT,
      gasPrice: await web3.eth.getGasPrice(),
    })
    console.log('called contract!')
    return Number(songAdded.returnValues[0])
  }

  const buyMembership = async () => {
    if (!walletAddress) return
    const { buyMembership: ctcBuyMembership } = contract.methods
    const method = () => ctcBuyMembership()
    const gasLimit = await method().estimateGas({})
    console.log('dynamic gas limit', gasLimit)
    const { transactionHash } = await method().send({
      from: walletAddress,
      gas: gasLimit,
      gasPrice: await web3.eth.getGasPrice(),
    })
    console.log('contract called!')
  }

  return {
    addSong,
    getContractView,
    buyMembership,
    contractAddress: ROYALTY_CTC_ADDRESS,
    abi,
  }
}

export default useContract
