import { useRecoilState } from 'recoil'
import nowPlayingState, { defaultNowPlayingState } from 'atoms/nowPlaying'
import { TrackWithArtistAndPlays } from 'types'
import useApi from './useApi'

const useNowPlaying = () => {
  const { savePlay } = useApi()
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState)

  const pause = () => {
    setNowPlaying((prev) => ({
      ...prev,
      isPlaying: false,
    }))
  }

  const play = async (track: TrackWithArtistAndPlays) => {
    await savePlay(track.id)
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
