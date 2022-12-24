import styled from 'styled-components'
import MobileMenu from './Mobile'
import DesktopSidebar from './Desktop'
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
    height: 100vh;
    padding: 0.5rem 10px 1rem 10px;
  }
`

export default function Layout({ children }) {
  if (typeof window === 'undefined') return null
  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
    console.log('yay')
  }
  window.addEventListener('resize', documentHeight)
  documentHeight()
  return (
    <Container>
      <MobileMenu />
      <DesktopSidebar />
      <Content>
        {children}
        <AudioPlayer />
      </Content>
    </Container>
  )
}
