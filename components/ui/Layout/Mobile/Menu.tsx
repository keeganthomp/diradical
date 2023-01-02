import styled from 'styled-components'
import React from 'react'
import { useRouter } from 'next/router'
import { IoCloseOutline } from 'react-icons/io5'
import useMagicWallet from 'hooks/useWallet'
import { NAV_LINKS } from 'const'
import { SidebarButton } from 'components/ui/Buttons'
import { BsPeople } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import useModal from 'hooks/useModal'
import { ErrorMessage } from 'types'
import Loader from 'components/ui/Loader'

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
  overflow: hidden;
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

const LogoutButton = styled.p`
  color: red;
  cursor: pointer;
  font-size: 14px;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 2.5rem;
  position: absolute;
`

const LoaderContainer = styled.div`
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MobileMenu({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) {
  const ctc = useContract()
  const { user } = useUser()
  const router = useRouter()
  const { openModal, ModalType } = useModal()
  const { walletAddress, isLoggedIn, logout, isAuthenticating } =
    useMagicWallet()

  const handleRoute = (path: string) => {
    router.push(path)
    close()
  }

  const handleBuyMembership = async () => {
    try {
      await ctc.buyMembership()
      close()
    } catch (err) {
      if (err.message === ErrorMessage.SEASON_NOT_OVER) {
        openModal(ModalType.ERROR, 'Start the new Season first!')
      }
      close()
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      close()
    } catch (err) {
      console.log('error logging out on mobile menu: ', err)
    }
  }

  const handleLogin = () => {
    router.push('/authenticate')
    close()
  }

  if (!isOpen) return null

  const isMembershipValid =
    ctc?.currentSecs && user && user.membershipExp > ctc.currentSecs
  const showBuyMembButton = isLoggedIn && !isMembershipValid

  return (
    <>
      <Overlay />
      <CloseIcon onClick={close} />
      {isAuthenticating ? (
        <LoaderContainer>
          <Loader color='#000' />
        </LoaderContainer>
      ) : (
        <Menu>
          <List>
            {!walletAddress && (
              <LoginButton icon={<BiLogIn />} onClick={handleLogin}>
                Login
              </LoginButton>
            )}
            {showBuyMembButton && (
              <SidebarButton
                isLoading={ctc.isProcessing}
                icon={<BsPeople />}
                onClick={handleBuyMembership}
              >
                Buy Membership
              </SidebarButton>
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
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Menu>
      )}
    </>
  )
}
