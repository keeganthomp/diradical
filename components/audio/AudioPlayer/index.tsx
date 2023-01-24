import DesktopAudioPlayer from './Desktop'
import MobileAudioPlayer from './Mobile'
import mobile from 'is-mobile'
import useNowPlaying from 'hooks/useNowPlaying'
import { useEffect, useState, useRef, SyntheticEvent } from 'react'
import useApi from 'hooks/useApi'
import useUser from 'hooks/useUser'

export default function AudioPlayer() {
  if (typeof window === 'undefined') return null
  const {
    timeElapsed,
    isPlaying,
    setNowPlaying,
    track: nowPlayingTrack,
    isListenedTo,
  } = useNowPlaying()
  const { countPlay } = useApi()
  const { user } = useUser()
  const [currentSong, setCurrentSong] = useState({
    id: null as string,
    progress: 0,
    duration: 0,
  })

  const audioRef = useRef<HTMLAudioElement>()

  const handleProgressChange = (e: SyntheticEvent<HTMLAudioElement>) => {
    const { currentTime } = e.currentTarget
    const isFinished = currentTime === currentSong.duration
    setCurrentSong((prev) => ({
      ...prev,
      progress: isFinished ? 0 : currentTime,
    }))
    if (isFinished) {
      audioRef.current.pause()
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (!nowPlayingTrack || !isPlaying) return
    const shouldPlayNewTrack = currentSong.id !== nowPlayingTrack.id
    if (shouldPlayNewTrack) {
      audioRef.current.currentTime = 0
      setCurrentSong((prev) => ({
        ...prev,
        id: nowPlayingTrack.id,
        progress: 0,
      }))
    }
    const interval = setInterval(async () => {
      setNowPlaying((prev) => ({
        ...prev,
        timeElapsed: prev.timeElapsed + 1,
      }))
    }, 1000)
    audioRef.current.play()
    return () => clearInterval(interval)
  }, [nowPlayingTrack, isPlaying])

  useEffect(() => {
    const recordListen = async () => {
      await countPlay(nowPlayingTrack.id)
      setNowPlaying((prev) => {
        return {
          ...prev,
          isListenedTo: true,
        }
      })
    }
    const isValidListenTime = timeElapsed > 30 && !isListenedTo
    const isSongOwner = user && user.id === nowPlayingTrack?.artist?.id
    if (isValidListenTime && !isSongOwner) {
      recordListen()
    }
  }, [timeElapsed])

  if (!nowPlayingTrack) return null

  const isMobile = mobile()
  return (
    <>
      {isMobile ? (
        <MobileAudioPlayer
          progress={currentSong.progress}
          duration={currentSong.duration}
        />
      ) : (
        <DesktopAudioPlayer
          progress={currentSong.progress}
          duration={currentSong.duration}
        />
      )}
      <audio
        hidden
        ref={audioRef}
        src={nowPlayingTrack.audio}
        onTimeUpdate={handleProgressChange}
        onLoadedMetadata={() =>
          setCurrentSong((prev) => ({
            ...prev,
            duration: audioRef.current.duration,
          }))
        }
      />
    </>
  )
}
