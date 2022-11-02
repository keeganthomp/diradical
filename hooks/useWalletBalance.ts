import useUser from './useUser'
import { useQuery } from 'react-query'
import API from 'api'
import { CacheKey } from 'types'

export default function useWalletBalance() {
  const { data: user, error: userFetchError } = useUser()
  const query = useQuery(
    CacheKey.WALLET_BALANCE,
    () => API.fetchWalletBalance(user?.walletAddress),
    { enabled: Boolean(user) },
  )
  return {
    balance: query?.data?.account?.amount || null,
    isFetching: query?.data?.account?.amount === undefined || !user,
    error: userFetchError || query.error,
  }
}
