import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import React from 'react'
import { devices } from 'styles/theme'
import { useRouter } from 'next/router'
import { IoCloseOutline } from 'react-icons/io5'
import { useUser } from '@auth0/nextjs-auth0'

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

const Container = styled.div`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;
  display: none;
  @media ${devices.mobile} {
    display: flex;
  }
`
const Content = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Hamburger = styled(FaBars)`
  color: #fff;
  cursor: pointer;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.span`
  color: #fff;
  margin: 8px 0;
`

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  margin: 0;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  opacity: 0.5;
  cursor: pointer;
  color: #fff;
  z-index: 11;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

export default function MobileNavbar() {
  const { user } = useUser()
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const handleRouteChange = (to: string) => {
    router.push(to)
    setIsOpen(false)
  }

  const handleClose = () => {
    console.log('errr', isOpen)
    setIsOpen(false)
  }

  return (
    <Container>
      <Hamburger onClick={toggle} />
      {isOpen && (
        <>
          <Overlay />
          <CloseIcon onClick={handleClose} />
          <Content>
            <List>
              <ListItem onClick={() => handleRouteChange('/')}>Music</ListItem>
              <ListItem onClick={() => handleRouteChange('/profile')}>
                Profile
              </ListItem>
              {useUser ? (
                <ListItem onClick={() => handleRouteChange('/api/auth/logout')}>
                  Logout
                </ListItem>
              ) : (
                <>
                  <ListItem
                    onClick={() => handleRouteChange('/api/auth/login')}
                  >
                    Login
                  </ListItem>
                  <ListItem
                    onClick={() => handleRouteChange('/api/auth/signup')}
                  >
                    Signup
                  </ListItem>
                </>
              )}
            </List>
          </Content>
        </>
      )}
    </Container>
  )
}
