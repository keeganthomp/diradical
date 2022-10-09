import LoginButton from 'components/ui/Buttons/LoginButton'
import LogoutButton from 'components/ui/Buttons/LogoutButton'
import styled from 'styled-components'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

type NavLink = {
  name: string
  path: string
  authRequired?: boolean
}

const NAV_LINKS: NavLink[] = [
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
        <Link key={link.path} href={link.path}>
          {link.name}
        </Link>
      ))}
      {user ? <LogoutButton /> : <LoginButton />}
    </NavbarWrapper>
  )
}

export default Navbar
