import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import { devices } from 'styles/theme'

const Title = styled.span`
  font-weight: 200;
`
const SignupButton = styled.a`
  background: ${(p) => p.theme.colors.main};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  padding: 0 14px;
  transition: opacity 0.1s ease-in-out;
  margin-left: 1rem;
  &:hover {
    opacity: 0.8;
  }
`

const AuthLink = styled.p`
  color: #fff;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-weight: 200;
  margin: 0;
  border-radius: 5px;
  font-weight: 200;
  width: 4rem;
  text-align: center;
  text-transform: lowercase;
  &:hover {
    background: rgba(229, 232, 235, 0.2);
  }
  a {
    text-decoration: none;
    width: 100%;
    &:visited {
      color: #fff;
    }
  }
`

const NavbarWrapper = styled.div`
  grid-area: navbar;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 3rem;
  z-index: 10;
  padding: 0 2rem;
  @media ${devices.mobile} {
    display: none;
  }
`

const Navbar = () => {
  const { user } = useUser()
  return (
    <NavbarWrapper>
      {user ? (
        <AuthLink>
          <Link href='/api/auth/logout'>Logout</Link>
        </AuthLink>
      ) : (
        <>
          <AuthLink>
            <Link href='/api/auth/login'>Login</Link>
          </AuthLink>
          <SignupButton href='/api/auth/signup'>
            <Title>Signup</Title>
          </SignupButton>
        </>
      )}
    </NavbarWrapper>
  )
}

export default Navbar
