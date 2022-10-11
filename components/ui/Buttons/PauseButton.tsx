import Button from './Base'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { FaPause } from 'react-icons/fa'
import { devices } from 'styles/theme'

const StyledButton = styled(Button)<{ audioPlayer?: boolean }>`
  padding: 0;
  background: ${(p) => (p.audioPlayer ? 'transparent' : p.theme.colors.main)};
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

const PauseIcon = styled(FaPause)`
  position: relative;
  top: 2px;
  font-size: 20px;
  font-size: ${(p) => (p.audioPlayer ? '2rem' : '20px')};
`

export default function PauseButton({
  audioPlayer,
}: {
  audioPlayer?: boolean
}) {
  const { pause } = useNowPlaying()

  return (
    <StyledButton audioPlayer={audioPlayer} onClick={pause}>
      <PauseIcon />
    </StyledButton>
  )
}
