import Button from './Base'
import useNowPlaying from 'hooks/useNowPlaying'
import styled from 'styled-components'
import { FaPause } from 'react-icons/fa'
import { devices } from 'styles/theme'

const StyledButton = styled(Button)`
  padding: 0;
  background: white;
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

const PauseIcon = styled(FaPause)`
  position: relative;
  top: 2px;
  font-size: 20px;
  @media ${devices.mobile} {
    font-size: 30px;
  }
`

export default function PauseButton() {
  const { pause } = useNowPlaying()

  return (
    <StyledButton onClick={pause}>
      <PauseIcon />
    </StyledButton>
  )
}
