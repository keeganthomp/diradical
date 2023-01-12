import {
  Track as PrismaTrack,
  User as PrismaUser,
  Season as PrismaSeason,
} from '@prisma/client'

export type Track = PrismaTrack & {
  artist: PrismaUser
  plays: number
}

export type Season = PrismaSeason & {
  plays: number
  memberships: number
  payouts: number
}
