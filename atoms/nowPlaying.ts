import { atom } from 'recoil'
import { Track } from 'types'

export const defaultNowPlayingState = {
  isPlaying: false,
  track: null as Track | null,
  timeElapsed: 0,
  isListenedTo: false,
}

const nowPlayingState = atom({
  key: 'nowPlaying',
  default: defaultNowPlayingState,
})

export default nowPlayingState
