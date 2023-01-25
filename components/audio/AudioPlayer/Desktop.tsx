import ProgressBar from './ProgressBar'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import PlayPauseButton from './PlayPauseButton'
import { IoCloseOutline } from 'react-icons/io5'
import { devices } from 'styles/theme'

const Container = styled.div`
  z-index: 9;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(10px);
  -webkitbackdropfilter: saturate(180%) blur(20px);
  color: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem;
  display: grid;
  align-items: center;
  height: 5rem;
  grid-template-columns: 4rem 10rem 1fr 10rem 4rem;
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
  font-size: 12px;
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
  max-height: 4rem;
  max-width: 3.5rem;
  border-radius: 4px;
`

export default function DesktopAudioPlayer({
  progress,
  duration,
}: {
  progress: number
  duration: number
}) {
  const { track: nowPlayingTrack, isPlaying, stop } = useNowPlaying()

  return (
    <Container>
      <CloseIcon onClick={stop} />
      <SongTitle>{nowPlayingTrack.title}</SongTitle>
      <Artist>{nowPlayingTrack.artist.username}</Artist>
      <CoverArt src={nowPlayingTrack.art} />
      <ButtonWrapper>
        <PlayPauseButton isPlaying={isPlaying} />
      </ButtonWrapper>
      <ProgressBar progress={progress} duration={duration} />
    </Container>
  )
}
