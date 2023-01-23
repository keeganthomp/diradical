import { useSession } from 'next-auth/react'
import { User } from '@prisma/client'
import useSWR from 'swr'
import { Distribution } from 'lib/payouts'

type UserWithMetadata = User & {
  hasActiveMembership?: boolean
  listens: Distribution[]
  balance: number
}

type Response = {
  user: UserWithMetadata | null
  sessionStatus: 'authenticated' | 'unauthenticated' | 'loading'
  isAuthenticating: boolean
  isAuthenticated: boolean
}

export default function useUser(): Response {
  const { data: session, status } = useSession()
  const { data: userFromDb, error } = useSWR(
    session?.user ? `/api/users/${session.user.id}` : null,
  )
  const isFetchingUser = !error && !userFromDb
  const isAuthenticating = isFetchingUser || status === 'loading'
  const isAuthenticated = status === 'authenticated'
  const user = {
    ...session?.user,
    listens: userFromDb?.listenDistribution.artists as Distribution[],
    balance: userFromDb?.balance,
  }
  return {
    user: !isFetchingUser ? user : null,
    sessionStatus: status,
    isAuthenticating,
    isAuthenticated,
  }
}
