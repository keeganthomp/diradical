import { atom } from 'recoil'

const activeMenuState = atom({
  key: 'activeAudioId',
  default: {
    id: '',
  },
})

export default activeMenuState
