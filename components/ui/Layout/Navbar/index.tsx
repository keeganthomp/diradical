import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'
import NavLink from './NavLink'

type NavLinkType = {
  name: string
  path: string
  authRequired?: boolean
}

const NAV_LINKS: NavLinkType[] = [
  { name: 'Home', path: '/' },
  { name: 'Profile', path: '/profile', authRequired: true },
]

const NavbarWrapper = styled.div`
  background: ${(p) => p.theme.colors.main};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 3rem;
  a {
    margin: 6px;
    color: white;
    &:visited {
      color: white;
    }
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
          {link.name}
        </NavLink>
      ))}
      {user ? (
        <NavLink href='/api/auth/logout'>Logout</NavLink>
      ) : (
        <NavLink href='/api/auth/login'>Login</NavLink>
      )}
    </NavbarWrapper>
  )
}

export default Navbar
