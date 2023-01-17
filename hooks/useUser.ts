import { useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { User } from '@prisma/client'
import useSWR from 'swr'
import { Distribution } from 'lib/payouts'

export default function useUser() {
  const { data: session, status } = useSession()
  const isAuthenticating = status === 'loading'
  const isAuthenticated = status === 'authenticated'
  const { data: distribution } = useSWR(
    session?.user ? `/api/users/${session.user.id}/payouts/distribution` : null,
  )
  const { data: payout } = useSWR(
    session?.user ? `/api/users/${session.user.id}/payouts/receive` : null,
  )
  return {
    user: session?.user?.id
      ? session.user
      : (null as (User & { hasActiveMembership: boolean }) | null),
    sessionStatus: status,
    isAuthenticating,
    isAuthenticated,
    refreshSession: getSession, // refetches user from db. will include the latest user data from db
    distribution: {
      artists: (distribution?.artists || []) as Distribution[],
      totalAmount: distribution?.totalAmountToGive || 0,
    },
    payout: payout?.balance || 0,
  }
}
