import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import React from 'react'
import { useRouter } from 'next/router'
import { IoCloseOutline } from 'react-icons/io5'
import useMagicWallet from 'hooks/useMagicWallet'
import useContract from 'hooks/useContract'
import { NAV_LINKS } from 'const'
import { SidebarButton } from 'components/ui/Buttons'
import { BsPersonCheck } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import { devices } from 'styles/theme'

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(20px);
  -webkitbackdropfilter: saturate(180%) blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
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
  flex-direction: column;
`

const Container = styled.div`
  position: fixed;
  background: #fff;
  box-shadow: 6px 5px 28px -16px rgba(0, 0, 0, 0.75);
  top: 0;
  left: 10px;
  right: 10px;
  width: 95%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  @media ${devices.mobile} {
    display: flex;
  }
`

const Hamburger = styled(FaBars)`
  color: #000;
  position: absolute;
  right: 0.75rem;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginButton = styled(SidebarButton)`
  margin: 0;
`

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  margin: 0;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  opacity: 0.5;
  cursor: pointer;
  color: #000;
  z-index: 11;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

export default function MobileNavbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const { authenticate, logout, walletAddress, isLoggedIn, showWallet } =
    useMagicWallet()
  const ctc = useContract()

  const toggle = () => setIsOpen(!isOpen)

  const handleRoute = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Container>
        <p>DIERAD</p>
        <Hamburger onClick={toggle} />
      </Container>
      {isOpen && (
        <>
          <Overlay />
          <CloseIcon onClick={handleClose} />
          <Content>
            <List>
              {!walletAddress && (
                <>
                  <LoginButton icon={<BiLogIn />} onClick={authenticate}>
                    Login
                  </LoginButton>
                  <SidebarButton
                    icon={<BsPersonCheck />}
                    onClick={authenticate}
                  >
                    Signup
                  </SidebarButton>
                </>
              )}
              {NAV_LINKS.map((link) => (
                <SidebarButton
                  onClick={() => handleRoute(link.path)}
                  icon={<link.icon />}
                  key={link.title}
                >
                  {link.title}
                </SidebarButton>
              ))}
            </List>
          </Content>
        </>
      )}
    </>
  )
}
