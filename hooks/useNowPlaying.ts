import { useRecoilState } from 'recoil'
import nowPlayingState, { defaultNowPlayingState } from 'atoms/nowPlaying'
import { TrackWithArtist } from 'types'

const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState)

  const pause = () => {
    setNowPlaying((prev) => ({
      ...prev,
      isPlaying: false,
    }))
  }

  const play = (track: TrackWithArtist) => {
    setNowPlaying((prev) => ({
      ...prev,
      isPlaying: true,
      track,
    }))
  }

  const stop = () => setNowPlaying(defaultNowPlayingState)

  return { ...nowPlaying, play, pause, stop }
}

export default useNowPlaying
