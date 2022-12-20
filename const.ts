import React from 'react'
import { IoWalletOutline } from 'react-icons/io5'
import { BsMusicNoteBeamed, BsMusicPlayerFill, BsFlower2 } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

type NavLinkType = {
  path: string
  title: string
  icon: React.FC
}

export const NAV_LINKS: NavLinkType[] = [
  { title: 'Catalog', path: '/', icon: BsMusicNoteBeamed },
  { title: 'My Music', path: '/my-music', icon: BsMusicPlayerFill },
  { title: 'Current Season', path: '/season', icon: BsFlower2 },
  {
    title: 'Payouts',
    path: '/payouts',
    icon: FaRegMoneyBillAlt,
  },
]
