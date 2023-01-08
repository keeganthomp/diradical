import { Track, User, PlayEvent } from '@prisma/client'

export type TrackWithArtistAndPlays = Track & {
  artist: Partial<User>
  plays: PlayEvent[]
}

export enum ErrorMessage {
  NO_WALLET = 'Please connect your wallet',
  SEASON_NOT_OVER = 'Season is not over',
  SEASON_OVER = 'Season is over',
}

export type Season = {
  id: number
  payout: number | string
  members: number
  endPeriodTime: number
  hasEnded: boolean
}

export type Payout = {
  period: number
  amount: number
}
