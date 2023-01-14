import { DefaultUser } from 'next-auth'
import { User as PrismaUser } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & PrismaUser & { hasActiveMembership?: boolean }
  }
  interface User extends PrismaUser {
    hasActiveMembership?: boolean
  }
}
