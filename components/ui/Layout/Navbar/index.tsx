import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'
import { SlMusicToneAlt, SlLogin, SlLogout } from 'react-icons/sl'
import { BsPerson } from 'react-icons/bs'
import NavLink from './NavLink'

type NavLinkType = {
  Icon: any
  path: string
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
const LoginIcon = styled(SlLogin)`
  font-size: 22px;
  padding: 3px;
`
const LogoutIcon = styled(SlLogout)`
  font-size: 22px;
  padding: 3px;
`

const NAV_LINKS: NavLinkType[] = [
  { Icon: MusicIcon, path: '/' },
  { Icon: ProfleIcon, path: '/profile', authRequired: true },
]

const NavbarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 3rem;
  z-index: 10;
  text-transform: lowercase;
  padding: 0 2rem;
  a {
    margin-left: 25px;
  }
`

const Navbar = () => {
  const { user } = useUser()

  const validNavLinks = NAV_LINKS.filter(
    (link) => (link.authRequired && user) || !link.authRequired,
  )

  return (
    <NavbarWrapper>
      {validNavLinks.map((link) => (
        <NavLink exact key={link.path} href={link.path}>
          <link.Icon />
        </NavLink>
      ))}
      {user ? (
        <NavLink href='/api/auth/logout'>
          <LogoutIcon />
        </NavLink>
      ) : (
        <NavLink href='/api/auth/login'>
          <LoginIcon />
        </NavLink>
      )}
    </NavbarWrapper>
  )
}

export default Navbar
