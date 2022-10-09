import { Track, User } from '@prisma/client'
import React from 'react'

export type TrackWithArtist = Track & { artist: User }

export type Tab = {
  Component: React.FC
  title: string
  active?: boolean
}
