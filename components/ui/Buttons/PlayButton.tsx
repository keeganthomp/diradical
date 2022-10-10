import Button from './Base'
import useNowPlaying from 'hooks/useNowPlaying'
import { TrackWithArtist } from 'types'
import { FaPlay } from 'react-icons/fa'
import styled from 'styled-components'
import { devices } from 'styles/theme'

type Props = {
  track: TrackWithArtist
}

const StyledButton = styled(Button)`
  padding: 0;
  background: white;
  color: ${(p) => p.theme.colors.main};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  @media ${devices.mobile} {
    height: 4rem;
    width: 4rem;
  }
`
const PlayIcon = styled(FaPlay)`
  position: relative;
  top: 2px;
  left: 2px;
  @media ${devices.mobile} {
    font-size: 30px;
  }
`

export default function PlayButton({ track }: Props) {
  const { play } = useNowPlaying()

  const handlePlay = () => play(track)

  return (
    <StyledButton onClick={handlePlay}>
      <PlayIcon />
    </StyledButton>
  )
}
