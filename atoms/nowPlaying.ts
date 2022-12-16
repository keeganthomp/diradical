import { atom } from 'recoil'
import { TrackWithArtist } from 'types'

export const defaultNowPlayingState = {
  isPlaying: false,
  track: null as TrackWithArtist | null,
}

const nowPlayingState = atom({
  key: 'nowPlaying',
  default: defaultNowPlayingState,
})

export default nowPlayingState
