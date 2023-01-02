import useSWR from 'swr'
import { Payout } from 'types'
import useMagicWallet from './useWallet'
import useContract from './useContract'

export default function usePayouts() {
  const { receivePayout } = useContract()
  const { isLoggedIn } = useMagicWallet()
  const {
    data: payouts,
    error,
    mutate,
  } = useSWR<{
    received: Payout[]
    notReceived: Payout[]
    all: Payout[]
  }>(isLoggedIn ? `/api/payouts` : null)
  return {
    payouts,
    isFetching: !payouts && !error,
    mutate,
    error,
    receivePayout,
  }
}
