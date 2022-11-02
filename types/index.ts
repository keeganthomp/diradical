import { Track, User } from '@prisma/client'
import React from 'react'

export type TrackWithArtist = Track & { artist: Partial<User> }

export type Tab = {
  Component: React.FC
  title: string
  active?: boolean
}

export enum CacheKey {
  TRACKS = 'tracks',
  USER_TRACKS = 'userTracks',
  USER = 'user',
  WALLET_BALANCE = 'walletBalance',
}
