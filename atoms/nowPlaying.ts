import { atom } from 'recoil'
import { TrackWithVotes } from 'types'

export const defaultNowPlayingState = {
  isPlaying: false,
  track: null as TrackWithVotes | null,
}

const nowPlayingState = atom({
  key: 'nowPlaying',
  default: defaultNowPlayingState,
})

export default nowPlayingState
