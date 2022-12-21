import React from 'react'
import useContract from 'hooks/useContract'
import useMagicWallet from 'hooks/useMagicWallet'
import payoutState, { Payout } from 'atoms/payouts'
import { useRecoilState } from 'recoil'
import useApi from './useApi'

export default function usePayouts() {
  const { walletAddress } = useMagicWallet()
  const { fetchPayouts } = useApi()
  const ctc = useContract()
  const [payouts, setPayouts] = useRecoilState(payoutState)

  React.useEffect(() => {
    let mounted = true
    const getRelevantPayouts = async () => {
      if (!mounted || payouts) return
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
      if (mounted && !payouts) {
        setPayouts(payoutsFromCtc)
      }
    }
    if (walletAddress && ctc?.votingPeriod) getRelevantPayouts()
    return () => {
      mounted = false
    }
  }, [walletAddress, ctc?.votingPeriod])

  const receivePayouts = async (votingPeriod: number) => {
    if (votingPeriod >= ctc.votingPeriod) throw new Error('Period is not over')
    await ctc.receivePayout(votingPeriod)
  }

  return { payouts, receivePayouts }
}
