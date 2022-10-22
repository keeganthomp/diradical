import { useState, useEffect } from 'react'
import stdlib from 'lib/reach'
import * as backend from 'contracts/index.song.mjs'

const useContractViews = (contractAddress: number) => {
  const [isFetchingCtcState, setFetchingCtcState] = useState(false)
  const [ctcViews, setCtcViews] = useState<{
    sharesAvailable: number
    canPurchase: boolean
    creator: string
  } | null>(null)

  useEffect(() => {
    const asyncGetViews = async () => {
      setFetchingCtcState(true)
      const acc = await stdlib.createAccount()
      const ctc = acc.contract(backend, contractAddress)
      const creator = await ctc.v.creator()
      const sharesAvailable = await ctc.v.sharesAvailable()
      const canPurchase = await ctc.v.canPurchase()
      const views = {
        sharesAvailable: stdlib.bigNumberToNumber(sharesAvailable[1]),
        canPurchase: canPurchase[1],
        creator: creator[1],
      }
      setFetchingCtcState(false)
      setCtcViews(views)
    }
    asyncGetViews()
  }, [])

  return { isFetching: isFetchingCtcState, views: ctcViews }
}

export default useContractViews
