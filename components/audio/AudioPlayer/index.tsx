import DesktopAudioPlayer from './Desktop'
import MobileAudioPlayer from './Mobile'
import mobile from 'is-mobile'
import useNowPlaying from 'hooks/useNowPlaying'
import { useEffect } from 'react'
import useApi from 'hooks/useApi'
import useUser from 'hooks/useUser'

export default function AudioPlayer() {
  const { timeElapsed, isPlaying, setNowPlaying, track, isListenedTo } =
    useNowPlaying()
  const { countPlay } = useApi()
  const { user } = useUser()

  const listen = async () => {
    if (!user || user.id === track.artist.id) return
    await countPlay(track.id)
    setNowPlaying((prev) => {
      return {
        ...prev,
        isListenedTo: true,
      }
    })
  }

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(async () => {
        setNowPlaying((prev) => ({
          ...prev,
          timeElapsed: prev.timeElapsed + 1,
        }))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  useEffect(() => {
    if (timeElapsed > 30 && !isListenedTo) {
      listen()
    }
  }, [timeElapsed])

  const isMobile = mobile()
  return isMobile ? <MobileAudioPlayer /> : <DesktopAudioPlayer />
}
