import styled from 'styled-components'
import MobileTopbar from './Mobile/Topbar'
import DesktopSidebar from './Desktop/Sidebar'
import { devices } from 'styles/theme'
import AudioPlayer from 'components/audio/AudioPlayer'

const SIDEBAR_WIDTH = '11rem'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} auto;
  grid-template-areas: 'sidebar content';
  height: 100vh;
  min-height: -webkit-fill-available; // chrome bs
  padding: 1.5rem;
  column-gap: 1.5rem;
  overflow: hidden;
  @media ${devices.mobile} {
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    padding: 0 10px 10px 10px;
  }
`
const Content = styled.div`
  position: relative;
  grid-area: content;
  padding: 0.5rem;
  background: ${(p) => p.theme.colors.background};
  overflow-y: scroll;
  border-radius: ${(p) => p.theme.borderRadius};
  overflow: hidden;
  box-shadow: 6px 5px 28px -16px rgba(0, 0, 0, 0.75);
  @media ${devices.mobile} {
    background: none;
    box-shadow: none;
    overflow-y: scroll;
    height: 100%;
    padding: 10px;
    margin-bottom: 3.25rem;
    padding-top: 3rem;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      <MobileTopbar />
      <DesktopSidebar />
      <Content>
        {children}
        <AudioPlayer />
      </Content>
    </Container>
  )
}
