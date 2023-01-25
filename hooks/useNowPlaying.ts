import { useRecoilState } from 'recoil'
import nowPlayingState, { defaultNowPlayingState } from 'atoms/nowPlaying'
import { Track } from 'types'
import useApi from './useApi'
import useUser from './useUser'

const useNowPlaying = () => {
  const { user } = useUser()
  const { initPlay, getTrack } = useApi()
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState)

  const pause = () => {
    setNowPlaying((prev) => ({
      ...prev,
      isPlaying: false,
    }))
  }

  const play = async (track: Track) => {
    const isCurrentlyPlaying = nowPlaying.track?.id === track.id
    if (!isCurrentlyPlaying) {
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
      if (user && user.id !== track.artist.id) {
        await initPlay(track.id)
      }
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
