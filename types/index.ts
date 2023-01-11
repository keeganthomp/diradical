import { Track, User } from '@prisma/client'

export type TrackWithArtistAndPlays = Track & {
  artist: Partial<User>
  plays: number
}

export enum ErrorMessage {
  NO_WALLET = 'Please connect your wallet',
  SEASON_NOT_OVER = 'Season is not over',
  SEASON_OVER = 'Season is over',
}

export type Season = {
  id: number
  plays: number
  members: number
}

export type Payout = {
  period: number
  amount: number
}
