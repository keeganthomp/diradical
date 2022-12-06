import styled from 'styled-components'
import MobileTopbar from './Topbar/Mobile'
import Sidebar from './Sidebar'
import AudioPlayer from 'components/audio/AudioPlayer'
import { devices } from 'styles/theme'

const SIDEBAR_WIDTH = '15rem'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} auto;
  grid-template-areas: 'sidebar content';
  height: 100vh;
  padding: 10px;
  column-gap: 10px;
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
  overflow-y: scroll;
  border-radius: ${(p) => p.theme.borderRadius};
  border: 1px solid ${(p) => p.theme.colors.border};
  @media ${devices.mobile} {
    height: 100vh;
    padding: 3.5rem 0.5rem 5.5rem 0.5rem;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      <MobileTopbar />
      <Sidebar />
      <Content>{children}</Content>
      <AudioPlayer />
    </Container>
  )
}
