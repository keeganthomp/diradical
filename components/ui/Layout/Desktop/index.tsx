import styled from 'styled-components'
import { devices } from 'styles/theme'
import React from 'react'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useWallet'
import { SidebarButton } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import { NAV_LINKS } from 'const'
import { BsPeople } from 'react-icons/bs'
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
  overflow: hidden;
  @media ${devices.mobile} {
    display: none;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const LoginButton = styled(SidebarButton)`
  margin: 0;
`

const Logo = styled.p`
  text-align: center;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`

export default function Sidebar() {
  const router = useRouter()
  const { walletAddress, isAuthenticating, isLoggedIn } = useMagicWallet()
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
      <Logo onClick={() => router.push('/')}>DIERAD</Logo>
      <Content>
        {!walletAddress && (
          <LoginButton
            icon={<BiLogIn />}
            onClick={() => router.push('/authenticate')}
          >
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
