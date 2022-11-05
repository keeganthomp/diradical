import styled from 'styled-components'
import Navbar from 'components/ui/Layout/Navbar'
import Sidebar from './Sidebar'
import AudioPlayer from 'components/audio/AudioPlayer'
import { devices } from 'styles/theme'

const SIDEBAR_WIDTH = '15rem'
const NAVBAR_HEIGHT = '3rem'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} auto;
  grid-template-rows: ${NAVBAR_HEIGHT} 1fr;
  grid-template-areas:
    'navbar navbar'
    'sidebar content';
  @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`
const Content = styled.div`
  grid-area: content;
  padding: 0.5rem 0.5rem 6.75rem 0.5rem;
  background: ${(p) => p.theme.colors.background};
  height: calc(100vh - ${NAVBAR_HEIGHT});
  overflow-y: scroll;
  border-top-left-radius: 4px;
  @media ${devices.mobile} {
    height: 100vh;
    padding: 3.5rem 0.5rem 5.5rem 0.5rem;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
      <AudioPlayer />
    </Container>
  )
}
