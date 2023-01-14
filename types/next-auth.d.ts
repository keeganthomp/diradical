import { DefaultUser } from 'next-auth'
import { User as PrismaUser } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & PrismaUser
  }
  interface User extends PrismaUser {}
}
