import React from 'react'
import { BsMusicNoteBeamed, BsUpload } from 'react-icons/bs'

type NavLinkType = {
  path: string
  title: string
  icon: React.FC
}

export const NAV_LINKS: NavLinkType[] = [
  { title: 'Listen', path: '/listen', icon: BsMusicNoteBeamed },
  { title: 'Upload Song', path: '/upload', icon: BsUpload },
]
