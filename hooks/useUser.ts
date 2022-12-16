import useSWR from 'swr'
import { User, Vote } from '@prisma/client'
import useMagicWallet from './useMagicWallet'

export default function useUser() {
  const { walletAddress } = useMagicWallet()
  const {
    data: user,
    error,
    mutate,
  } = useSWR<User & { castedVotes: Vote[] }>(
    walletAddress ? `/api/user/${walletAddress}` : null,
  )

  return { user, isFetching: !user && !error, mutate }
}
