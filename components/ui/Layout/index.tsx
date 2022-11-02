import styled from 'styled-components'
import Navbar from 'components/ui/Layout/Navbar'
import AudioPlayer from 'components/audio/AudioPlayer'
import { devices } from 'styles/theme'

const StyledLayout = styled.div``
const Content = styled.div`
  padding: 3.5rem 2rem 5.5rem 2rem;
  background: ${(p) => p.theme.colors.background};
  height: 100vh;
  overflow-y: scroll;
  @media ${devices.mobile} {
    padding: 3.5rem 0.5rem 5.5rem 0.5rem;
  }
`

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />
      <Content>{children}</Content>
      <AudioPlayer />
    </StyledLayout>
  )
}
