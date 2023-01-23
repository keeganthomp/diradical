import {
  Track as PrismaTrack,
  User as PrismaUser,
  Season as PrismaSeason,
  Album as PrismaAlbum,
} from '@prisma/client'

export type Track = PrismaTrack & {
  artist: Omit<PrismaUser, 'password'>
  plays: number
}

export type Album = PrismaAlbum & {
  artist: Omit<PrismaUser, 'password'>
}

export type Season = PrismaSeason & {
  plays: number
  memberships: number
  payouts: number
}
