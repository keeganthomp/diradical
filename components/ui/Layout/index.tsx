import styled from 'styled-components'
import Navbar from 'components/ui/Layout/Navbar'
import AudioPlayer from 'components/audio/AudioPlayer'

const StyledLayout = styled.div``
const Content = styled.div`
  padding: 1.5rem 0.5rem 5.5rem 0.5rem;
  background: ${(p) => p.theme.colors.background};
  height: 100vh;
  padding-top: 3.5rem;
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
