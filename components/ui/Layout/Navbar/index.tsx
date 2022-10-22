import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'
import { SlMusicToneAlt, SlLogin, SlLogout } from 'react-icons/sl'
import { BsPerson } from 'react-icons/bs'
import NavLink from './NavLink'

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
const LoginIcon = styled(SlLogin)`
  font-size: 22px;
  padding: 3px;
`
const LogoutIcon = styled(SlLogout)`
  font-size: 22px;
  padding: 3px;
`
const Title = styled.span`
  font-weight: 200;
`
const SignupButton = styled.a`
  text-decoration: ${(p) => (p.active ? 'underline' : 'none')};
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #000;
  border-radius: 20px;
  padding: 0 14px;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const NAV_LINKS: NavLinkType[] = [
  { Icon: MusicIcon, title: 'Music', path: '/' },
  { Icon: ProfleIcon, title: 'profile', path: '/profile', authRequired: true },
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
          <Title>{link.title}</Title>
        </NavLink>
      ))}
      {user ? (
        <NavLink href='/api/auth/logout'>
          <Title>Logout</Title>
        </NavLink>
      ) : (
        <>
          <NavLink href='/api/auth/login'>
            <Title>Login</Title>
          </NavLink>
          <SignupButton href='/api/auth/signup'>
            <Title>Signup</Title>
          </SignupButton>
        </>
      )}
    </NavbarWrapper>
  )
}

export default Navbar
