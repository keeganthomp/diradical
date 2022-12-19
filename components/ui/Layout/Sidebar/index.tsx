import styled from 'styled-components'
import NavLink from 'components/ui/Layout/Sidebar/NavLink'
import { devices } from 'styles/theme'
import React from 'react'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useMagicWallet'
import { Button, SidebarButton } from 'components/ui/Buttons'
import { truncateWalletAddress } from 'utils'
import Loader from 'components/ui/Loader'
import { NAV_LINKS } from 'const'

const Container = styled.div`
  position: relative;
  grid-area: sidebar;
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  align-items: start;
  justify-content: center;
  padding: 1rem 0;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 6px 5px 28px -16px rgba(0, 0, 0, 0.75);
  padding: 10px;
  @media ${devices.mobile} {
    display: none;
  }
`

const Section = styled.div`
  width: 100%;
  text-align: center;
`

const WalletAddress = styled.p`
  margin: 0;
  color: #000;
  font-weight: 100;
  padding: 0.5rem 0;
  text-align: center;
`

const AuthButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginButton = styled.p`
  color: #000;
  font-size: 14px;
  text-decoration: underline;
  width: 50%;
  cursor: pointer;
`
const LogoutButton = styled.p`
  width: 4rem;
  background: transparent;
  color: red;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`

const MembershipExpired = styled.p`
  color: red;
  font-weight: bold;
`

export default function Sidebar() {
  const {
    authenticate,
    logout,
    walletAddress,
    isAuthenticating,
    isLoggedIn,
    showWallet,
  } = useMagicWallet()
  const ctc = useContract()
  const { openModal, ModalType } = useModal()
  const { user } = useUser()

  const handleBuyMembership = async () => {
    try {
      await ctc.buyMembership()
    } catch {
      openModal(ModalType.ERROR, 'Error buying membership')
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
      <Section>
        {walletAddress && (
          <WalletAddress>{truncateWalletAddress(walletAddress)}</WalletAddress>
        )}
        {!walletAddress && (
          <AuthButtonContainer>
            <LoginButton onClick={authenticate}>Login</LoginButton>
            <Button onClick={authenticate}>Signup</Button>
          </AuthButtonContainer>
        )}
        {walletAddress && (
          <SidebarButton onClick={showWallet}>Wallet</SidebarButton>
        )}
        {showBuyMembButton && (
          <>
            <SidebarButton onClick={handleBuyMembership}>
              Buy Membership
            </SidebarButton>
            <MembershipExpired>Membership Expired</MembershipExpired>
          </>
        )}
      </Section>
      <Section>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.title} href={link.path}>
            {link.title}
          </NavLink>
        ))}
      </Section>
      {walletAddress && <LogoutButton onClick={logout}>Logout</LogoutButton>}
    </Container>
  )
}
