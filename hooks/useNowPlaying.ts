import { useRecoilState } from 'recoil'
import nowPlayingState, { defaultNowPlayingState } from 'atoms/nowPlaying'
import { TrackWithArtistAndPlays } from 'types'
import useApi from './useApi'

const useNowPlaying = () => {
  const { initPlay, getTrack } = useApi()
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState)

  const pause = () => {
    setNowPlaying((prev) => ({
      ...prev,
      isPlaying: false,
    }))
  }

  const play = async (track: TrackWithArtistAndPlays) => {
    if (nowPlaying.track?.id !== track.id) {
      const { audio } = await getTrack(track.id)
      setNowPlaying(() => ({
        timeElapsed: 0,
        isPlaying: true,
        isListenedTo: false,
        track: {
          ...track,
          audio,
        },
      }))
      await initPlay(track.id)
    } else {
      setNowPlaying((prev) => ({
        ...prev,
        isPlaying: true,
      }))
    }
  }
  const stop = () => setNowPlaying(defaultNowPlayingState)

  return { ...nowPlaying, play, pause, stop, setNowPlaying }
}

export default useNowPlaying
