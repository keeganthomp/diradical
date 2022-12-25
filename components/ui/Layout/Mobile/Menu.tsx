import styled from 'styled-components'
import React from 'react'
import { useRouter } from 'next/router'
import { IoCloseOutline } from 'react-icons/io5'
import useMagicWallet from 'hooks/useWallet'
import { NAV_LINKS } from 'const'
import { SidebarButton } from 'components/ui/Buttons'
import { BsPersonCheck } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'

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

const Menu = styled.div`
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
  top: 0.75rem;
  right: 0.75rem;
  font-size: 1.5rem;
  opacity: 0.5;
  cursor: pointer;
  color: #000;
  z-index: 11;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

export default function MobileMenu({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) {
  const router = useRouter()
  const { authenticate, walletAddress } = useMagicWallet()

  const handleRoute = (path: string) => {
    router.push(path)
    close()
  }

  if (!isOpen) return null

  return (
    <>
      <Overlay />
      <CloseIcon onClick={close} />
      <Menu>
        <List>
          {!walletAddress && (
            <LoginButton icon={<BiLogIn />} onClick={authenticate}>
              Login
            </LoginButton>
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
      </Menu>
    </>
  )
}
