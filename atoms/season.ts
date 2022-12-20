import { atom } from 'recoil'

type Season = {
  current: number
  end: string
  hasEnded?: boolean
}

const sesonState = atom({
  key: 'season',
  default: null as Season,
})

export default sesonState
