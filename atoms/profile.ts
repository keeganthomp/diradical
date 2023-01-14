import { atom } from 'recoil'

export type Tab = 'tracks' | 'payouts'

const profileState = atom({
  key: 'profile',
  default: {
    activeTab: 'tracks' as Tab,
  },
})

export default profileState
