import { atom } from 'recoil'

type Season = {
  current: number
  end: string
  payout: number
  members: number
  votes: number
  hasEnded?: boolean
}

const sesonState = atom({
  key: 'season',
  default: null as Season,
})

export default sesonState
