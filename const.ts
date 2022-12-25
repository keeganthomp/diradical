import React from 'react'
import { BsMusicNoteBeamed, BsMusicPlayerFill, BsFlower2 } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

type NavLinkType = {
  path: string
  title: string
  icon: React.FC
}

export const NAV_LINKS: NavLinkType[] = [
  { title: 'Upload', path: '/upload', icon: BsFlower2 },
  { title: 'Listen', path: '/listen', icon: BsMusicNoteBeamed },
  { title: 'Season', path: '/season', icon: BsFlower2 },
  {
    title: 'Payouts',
    path: '/payouts',
    icon: FaRegMoneyBillAlt,
  },
  { title: 'My Music', path: '/me', icon: BsMusicPlayerFill },
]
