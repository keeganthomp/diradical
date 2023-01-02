import { Track, User } from '@prisma/client'

export type TrackWithArtist = Track & { artist: Partial<User> }

export enum ErrorMessage {
  NO_WALLET = 'Please connect your wallet',
  SEASON_NOT_OVER = 'Season is not over',
  SEASON_OVER = 'Season is over',
}

export type Season = {
  currentSeason: number
  payout: number | string
  votes: number
  members: number
  endPeriodTime: number
  hasEnded: boolean
}

export type Payout = {
  period: number
  amount: number
}
