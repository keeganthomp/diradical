import styled from 'styled-components'
import { devices } from 'styles/theme'
import React from 'react'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useMagicWallet'
import { SidebarButton } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import { NAV_LINKS } from 'const'
import { BsPeople, BsPersonCheck } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import { useRouter } from 'next/router'
import UserIfno from './User'
import { ErrorMessage } from 'types'

const Container = styled.div`
  position: relative;
  grid-area: sidebar;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr;
  background: white;
  align-items: start;
  padding: 1rem 0;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 6px 5px 28px -16px rgba(0, 0, 0, 0.75);
  padding: 10px;
  @media ${devices.mobile} {
    display: none;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const AuthButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
`

const LoginButton = styled(SidebarButton)`
  margin: 0;
`

const Logo = styled.p`
  text-align: center;
  align-self: center;
`

export default function Sidebar() {
  const router = useRouter()
  const { authenticate, walletAddress, isAuthenticating, isLoggedIn } =
    useMagicWallet()
  const ctc = useContract()
  const { openModal, ModalType } = useModal()
  const { user } = useUser()

  const handleBuyMembership = async () => {
    try {
      await ctc.buyMembership()
    } catch (err) {
      if (err.message === ErrorMessage.SEASON_NOT_OVER) {
        openModal(ModalType.ERROR, 'Start the new Season first!')
      }
    }
  }

  const isMembershipValid =
    ctc?.currentSecs && user && user.membershipExp > ctc.currentSecs
  const showBuyMembButton = isLoggedIn && !isMembershipValid

  if (isAuthenticating)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  return (
    <Container>
      <Logo>DIERAD</Logo>
      <Content>
        {!walletAddress && (
          <AuthButtonContainer>
            <LoginButton icon={<BiLogIn />} onClick={authenticate}>
              Login
            </LoginButton>
            <SidebarButton icon={<BsPersonCheck />} onClick={authenticate}>
              Signup
            </SidebarButton>
          </AuthButtonContainer>
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
            onClick={() => router.push(link.path)}
            icon={<link.icon />}
            key={link.title}
          >
            {link.title}
          </SidebarButton>
        ))}
      </Content>
      <UserIfno />
    </Container>
  )
}
