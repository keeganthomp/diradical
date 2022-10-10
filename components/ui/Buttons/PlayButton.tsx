import Button from './Base'
import useNowPlaying from 'hooks/useNowPlaying'
import { TrackWithArtist } from 'types'
import { FaPlay } from 'react-icons/fa'
import styled from 'styled-components'
import { devices } from 'styles/theme'

type Props = {
  track: TrackWithArtist
  hidden?: boolean
}

const StyledButton = styled(Button)<{ hidden?: boolean }>`
  padding: 0;
  background: ${(p) => p.theme.colors.main};
  color: black;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  z-index: 8;
  @media ${devices.mobile} {
    height: 4rem;
    width: 4rem;
  }
`
const PlayIcon = styled(FaPlay)`
  position: relative;
  top: 2px;
  left: 2px;
  font-size: 20px;
  @media ${devices.mobile} {
    font-size: 30px;
  }
`

export default function PlayButton({ track, hidden }: Props) {
  const { play } = useNowPlaying()

  const handlePlay = () => play(track)

  return (
    <StyledButton hidden={hidden} onClick={handlePlay}>
      <PlayIcon />
    </StyledButton>
  )
}
