import { useRef, useState, useEffect, SyntheticEvent } from 'react'
import ProgressBar from './ProgressBar'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import { FaPause, FaPlay } from 'react-icons/fa'

const Container = styled.div`
  display: none;
  box-shadow: 1px -15px 47px 0px rgba(0, 0, 0, 0.75);
  z-index: 9;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  color: white;
  position: fixed;
  bottom: 0;
  flex-direction: column;
  width: 100%;
  @media ${devices.mobile} {
    display: inherit;
    flex-direction: column;
  }
`

const SongTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  align-self: end;
`
const Artist = styled.p`
  margin: 0;
  font-size: 14px;
  align-self: end;
`

const CoverArt = styled.img`
  max-height: 3rem;
  max-width: 3rem;
  border-radius: 4px;
  padding-left: 3px;
  margin-right: 6px;
  object-fit: contain;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
`
const ArtAndTitle = styled.div`
  display: flex;
`
const TitleAndArtist = styled.div``

export default function MobileAudioPlayer() {
  const { track: nowPlayingTrack, isPlaying, pause, play } = useNowPlaying()
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  const audioRef = useRef<HTMLAudioElement>()

  const handleProgressChange = (e: SyntheticEvent<HTMLAudioElement>) => {
    const { currentTime } = e.currentTarget
    const isFinished = currentTime === duration
    if (isFinished) {
      setProgress(0)
      pause()
      return
    }
    setProgress(currentTime)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (!nowPlayingTrack) return
    const isCurrentTrack = audioRef?.current.src === nowPlayingTrack.source
    if (isCurrentTrack && !isPlaying) return
    if (isPlaying) {
      audioRef.current.play()
    }
  }, [nowPlayingTrack, isPlaying])

  const handlePlay = () => {
    if (nowPlayingTrack) {
      play(nowPlayingTrack)
    }
  }

  if (!nowPlayingTrack) return null
  return (
    <>
      <Container>
        <TopBar>
          <ArtAndTitle>
            <CoverArt src={nowPlayingTrack.coverArt} />
            <TitleAndArtist>
              <SongTitle>{nowPlayingTrack.title}</SongTitle>
              <Artist>
                {nowPlayingTrack.artist.username ||
                  nowPlayingTrack.artist.email}
              </Artist>
            </TitleAndArtist>
          </ArtAndTitle>
          {isPlaying ? (
            <FaPause onClick={pause} />
          ) : (
            <FaPlay onClick={handlePlay} />
          )}
        </TopBar>
        <ProgressBar progress={progress} duration={duration} />
      </Container>
      {/* Used as a ref */}
      <audio
        hidden
        ref={audioRef}
        src={nowPlayingTrack.source}
        onTimeUpdate={handleProgressChange}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />
    </>
  )
}
