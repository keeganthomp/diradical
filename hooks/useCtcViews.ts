import { useState, useEffect } from 'react'
import stdlib from 'lib/reach'
import * as backend from 'contracts/index.song.mjs'

type CtcViews = {
  creator: string
  isOpenToPublic: boolean
  tokensAvailable: number
  ownershipTokId: number
  tokenPrice: number
  totalValue: number
  totalPaid: number
  totalTokenAllocation: number
  creatorTokenAllocation: number
  checkOwnership: (walletAddress: string) => Promise<number>
}

const useContractViews = (contractAddress: number) => {
  const [isFetchingCtcState, setFetchingCtcState] = useState(false)
  const [ctcViews, setCtcViews] = useState<CtcViews | null>(null)

  const fetchCtcViews = async () => {
    setFetchingCtcState(true)
    const acc = await stdlib.createAccount()
    const ctc = acc.contract(backend, contractAddress)
    const creator = await ctc.v.creator()
    const toksAvailable = await ctc.v.toksAvailable()
    const ownershipTokId = await ctc.v.ownershipTokId()
    const pricePerShare = await ctc.v.pricePerUnit()
    const totValue = await ctc.v.totalValue()
    const isOpenToPublic = await ctc.v.isOpenToPublic()
    const totalPaid = await ctc.v.totalPaid()
    const totalTokenAllocation = await ctc.v.totalTokenAllocation()
    const creatorTokenAllocation = await ctc.v.creatorTokenAllocation()
    const views = {
      creator: creator[1],
      isOpenToPublic: isOpenToPublic[1],
      tokensAvailable: stdlib.bigNumberToNumber(toksAvailable[1]),
      ownershipTokId: stdlib.bigNumberToNumber(ownershipTokId[1]),
      tokenPrice: stdlib.bigNumberToNumber(pricePerShare[1]),
      totalValue: stdlib.bigNumberToNumber(totValue[1]),
      totalPaid: stdlib.bigNumberToNumber(totalPaid[1]),
      totalTokenAllocation: stdlib.bigNumberToNumber(totalTokenAllocation[1]),
      creatorTokenAllocation: stdlib.bigNumberToNumber(
        creatorTokenAllocation[1],
      ),
      checkOwnership: async (walletAddress: string) => {
        const toksOwned = await ctc.v.checkOwnership(walletAddress)
        return stdlib.bigNumberToNumber(toksOwned[1])
      },
    }
    setFetchingCtcState(false)
    setCtcViews(views)
  }

  useEffect(() => {
    fetchCtcViews()
  }, [])

  return {
    isFetching: isFetchingCtcState,
    views: ctcViews,
    refetch: fetchCtcViews,
  }
}

export default useContractViews
