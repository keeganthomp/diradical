import { atom } from 'recoil'
import { TrackWithArtistAndPlays } from 'types'

export const defaultNowPlayingState = {
  isPlaying: false,
  track: null as TrackWithArtistAndPlays | null,
  timeElapsed: 0,
  isListenedTo: false,
}

const nowPlayingState = atom({
  key: 'nowPlaying',
  default: defaultNowPlayingState,
})

export default nowPlayingState
