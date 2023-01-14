import React from 'react'
import {
  BsMusicNoteBeamed,
  BsMusicPlayerFill,
  BsFlower2,
  BsUpload,
} from 'react-icons/bs'

type NavLinkType = {
  path: string
  title: string
  icon: React.FC
}

export const NAV_LINKS: NavLinkType[] = [
  { title: 'Listen', path: '/listen', icon: BsMusicNoteBeamed },
  { title: 'Season', path: '/season', icon: BsFlower2 },
  { title: 'Profile', path: '/profile', icon: BsMusicPlayerFill },
  { title: 'Upload Song', path: '/upload', icon: BsUpload },
]
