type NavLinkType = {
  path?: string
  title: string
}

export const NAV_LINKS: NavLinkType[] = [
  { title: 'Catalog', path: '/' },
  { title: 'My Music', path: '/my-music' },
  { title: 'Current Season', path: '/season' },
  {
    title: 'Payouts',
    path: '/payouts',
  },
]
