import { useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { User } from '@prisma/client'

export default function useUser() {
  const { data: session, status } = useSession()
  const isAuthenticating = status === 'loading'
  const isAuthenticated = status === 'authenticated'
  return {
    user: session?.user as User,
    sessionStatus: status,
    isAuthenticating,
    isAuthenticated,
    refreshSession: getSession, // refetches user from db. will include the latest user data from db
  }
}
