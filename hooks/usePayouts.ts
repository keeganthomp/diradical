import React from 'react'
import useContract from 'hooks/useContract'
import useMagicWallet from 'hooks/useMagicWallet'
import useApi from './useApi'

export type Payout = {
  period: number
  amount: number
  received?: boolean
}

export default function usePayouts() {
  const { walletAddress, isLoggedIn } = useMagicWallet()
  const { fetchPayouts } = useApi()
  const ctc = useContract()
  const [payouts, setPayouts] = React.useState<Payout[] | null>(null)

  React.useEffect(() => {
    const getRelevantPayouts = async () => {
      const payoutsFromDb = await fetchPayouts(walletAddress)
      const payoutPeriodsReceived = payoutsFromDb.map((p) => p.period)
      const currentPeriod = await ctc.votingPeriod
      const arr = [...Array(currentPeriod - 1).keys()].map((_, i) =>
        ctc.getSongInfo(walletAddress, i + 1),
      )
      const pms = await Promise.all(arr)
      const payoutsFromCtc = pms.reduce((acc, cur, i) => {
        const currPeriod = i + 1
        if (currPeriod === currentPeriod) return acc
        const period: Payout = {
          period: currPeriod,
          amount: cur?.payout || 0,
          received: payoutPeriodsReceived.includes(currPeriod),
        }
        acc.push(period)
        return acc
      }, [])
      setPayouts(payoutsFromCtc)
    }
    if (isLoggedIn && ctc?.votingPeriod) getRelevantPayouts()
  }, [isLoggedIn])

  const receivePayouts = async (votingPeriod: number) => {
    if (votingPeriod >= ctc.votingPeriod) throw new Error('Period is not over')
    await ctc.receivePayout(votingPeriod)
  }

  return { payouts, receivePayouts }
}
