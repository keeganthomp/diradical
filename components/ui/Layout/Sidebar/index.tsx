import styled from 'styled-components'
import { SlMusicToneAlt } from 'react-icons/sl'
import { BsPerson } from 'react-icons/bs'
import NavLink from 'components/ui/Layout/Sidebar/NavLink'
import { devices } from 'styles/theme'
import Wallet from './Wallet'

type NavLinkType = {
  Icon: any
  path: string
  title: string
  authRequired?: boolean
}

const MusicIcon = styled(SlMusicToneAlt)`
  font-size: 22px;
  padding: 3px;
`
const ProfleIcon = styled(BsPerson)`
  font-size: 22px;
  padding: 3px;
`

const NAV_LINKS: NavLinkType[] = [
  { Icon: MusicIcon, title: 'Music', path: '/' },
  { Icon: ProfleIcon, title: 'Profile', path: '/profile', authRequired: true },
]

const Container = styled.div`
  grid-area: sidebar;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.mobile} {
    display: none;
  }
`

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: #fff;
  font-weight: 200;
  justify-items: center;
`

export default function Sidebar() {
  return (
    <Container>
      <NavContainer>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.path} href={link.path}>
            {link.title}
          </NavLink>
        ))}
      </NavContainer>
      <Wallet />
    </Container>
  )
}
