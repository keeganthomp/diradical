import Button from './Base'
import useNowPlaying from 'hooks/useNowPlaying'
import { TrackWithArtist } from 'types'
import { FaPlay } from 'react-icons/fa'
import styled from 'styled-components'
import { devices } from 'styles/theme'

type Props = {
  track: TrackWithArtist
  audioPlayer?: boolean
}

const StyledButton = styled(Button)<{ audioPlayer?: boolean }>`
  padding: 0;
  background: ${(p) => p.theme.colors.main};
  color: black;
  border-radius: 50%;
  z-index: 8;
  height: ${(p) => (p.audioPlayer ? '2rem' : '3rem')};
  width: ${(p) => (p.audioPlayer ? '2rem' : '3rem')};
  @media ${devices.mobile} {
    height: 3rem;
    width: 3rem;
  }
`
const PlayIcon = styled(FaPlay)<{ audioPlayer?: boolean }>`
  position: relative;
  top: 2px;
  left: 2px;
  font-size: ${(p) => (p.audioPlayer ? '2rem' : '20px')};
`

export default function PlayButton({ track, audioPlayer }: Props) {
  const { play } = useNowPlaying()

  const handlePlay = () => play(track)

  return (
    <StyledButton audioPlayer={audioPlayer} onClick={handlePlay}>
      <PlayIcon />
    </StyledButton>
  )
}
