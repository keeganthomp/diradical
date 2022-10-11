import { useRef, useState, useEffect, SyntheticEvent } from 'react'
import ProgressBar from './ProgressBar'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PauseButton from 'components/ui/Buttons/PauseButton'
import PlayButton from 'components/ui/Buttons/PlayButton'
import { IoCloseOutline } from 'react-icons/io5'
import { devices } from 'styles/theme'

const Container = styled.div`
  box-shadow: 1px -15px 47px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  z-index: 9;
  background: ${(p) => p.theme.colors.main};
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.75rem;
  padding-bottom: 0;
  display: grid;
  align-items: center;
  grid-template-columns: 4rem 4rem 1fr 4rem 4rem;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'coverArt title pause . .'
    'coverArt artist progress . .';
  @media ${devices.mobile} {
    display: none;
  }
`

const SongTitle = styled.p`
  margin: 0;
  grid-area: title;
  font-size: 14px;
  font-weight: bold;
  align-self: end;
  padding-left: 3px;
`
const Artist = styled.p`
  margin: 0;
  grid-area: artist;
  font-size: 14px;
  align-self: start;
  padding-left: 3px;
`

const ButtonWrapper = styled.div`
  grid-area: pause;
  justify-self: center;
`

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  margin: 0;
  top: 3px;
  right: 0.5rem;
  font-size: 1.5rem;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

const CoverArt = styled.img`
  grid-area: coverArt;
  max-height: 6rem;
`

export default function DesktopAudioPlayer() {
  const { track: nowPlayingTrack, isPlaying, stop, pause } = useNowPlaying()
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

  if (!nowPlayingTrack) return null
  return (
    <>
      <Container>
        <CloseIcon onClick={stop} />
        <SongTitle>{nowPlayingTrack.title}</SongTitle>
        <Artist>
          {nowPlayingTrack.artist.username || nowPlayingTrack.artist.email}
        </Artist>
        <CoverArt src={nowPlayingTrack.coverArt} />
        <ButtonWrapper>
          {isPlaying ? (
            <PauseButton audioPlayer />
          ) : (
            <PlayButton audioPlayer track={nowPlayingTrack} />
          )}
        </ButtonWrapper>
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
