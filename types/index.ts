import { Track, User } from '@prisma/client'
import React from 'react'

export type TrackWithArtist = Track & { artist: Partial<User> }

export enum ErrorMessage {
  NO_WALLET = 'Please connect your wallet',
  SEASON_NOT_OVER = 'Season is not over',
  SEASON_OVER = 'Season is over',
}
