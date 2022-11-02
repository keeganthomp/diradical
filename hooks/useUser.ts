import API from 'api'
import { useQuery } from 'react-query'
import { User } from '@prisma/client'

export default function useUser() {
  return useQuery<User & { walletBalance: number | null }>(
    'user',
    API.fetchUser,
    {
      refetchInterval: 30000,
    },
  )
}
