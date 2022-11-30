import { Track, User, Vote } from '@prisma/client'
import React from 'react'

export type TrackWithVotes = Track & { artist: Partial<User>; votes: Vote[] }

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
