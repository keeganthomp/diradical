import { atom } from 'recoil'

const activeMenuState = atom({
  key: 'activeAudioId',
  default: {
    id: null as number,
  },
})

export default activeMenuState
