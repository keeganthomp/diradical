import styled from 'styled-components'
import { SlMusicToneAlt } from 'react-icons/sl'
import { BsPerson } from 'react-icons/bs'
import NavLink from 'components/ui/Layout/Sidebar/NavLink'
import { devices } from 'styles/theme'
import React from 'react'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import API from 'lib/api'
import Loader from 'components/ui/Loader'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useMagicWallet'
import ActionButton from 'components/ui/Buttons/ActionButton'
import { truncateWalletAddress } from 'utils'

type NavLinkType = {
  Icon: any
  path: string
  title: string
  authRequired?: boolean
}

const MusicIcon = styled(SlMusicToneAlt)`
  font-size: 22px;
  padding: 3px;
`
const ProfleIcon = styled(BsPerson)`
  font-size: 22px;
  padding: 3px;
`

const NAV_LINKS: NavLinkType[] = [
  { Icon: MusicIcon, title: 'Music', path: '/' },
  { Icon: ProfleIcon, title: 'Profile', path: '/profile', authRequired: true },
]

const Container = styled.div`
  position: relative;
  grid-area: sidebar;
  display: grid;
  background: white;
  align-items: start;
  justify-content: center;
  padding: 1rem 0;
  border-radius: ${(p) => p.theme.borderRadius};
  border: 1px solid ${(p) => p.theme.colors.border};
  @media ${devices.mobile} {
    display: none;
  }
`

const Section = styled.div`
  width: 100%;
  p {
    width: 100%;
  }
`

const WalletAddress = styled.p`
  margin: 0;
  margin-left: 1rem;
  color: #000;
  font-weight: 100;
  padding: 0.5rem 0;
`

const SidebarButton = styled(ActionButton)`
  color: #000;
  background: rgba(180, 180, 180, 0.2);
  &:hover {
    background: rgba(229, 232, 235, 0.15);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    background: rgba(229, 232, 235, 0.2);
  }
`

const AuthButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SignupButton = styled(ActionButton)`
  width: 4rem;
  padding: 1px;
`
const LoginButton = styled(ActionButton)`
  width: 4rem;
  background: transparent;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`
const LogoutButton = styled(ActionButton)`
  width: 4rem;
  background: transparent;
  color: red;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    text-decoration: underline;
  }
`

const ConnectButton = styled(ActionButton)`
  margin-bottom: 1rem;
`

export default function Sidebar() {
  const { isInitializing, authenticate, logout, walletAddress } =
    useMagicWallet()
  const ctc = useContract()
  const { openModal, ModalType, closeModal } = useModal()
  const { user, mutate } = useUser()
  const [currentBlockSecs, setCurrentBlockSecs] = React.useState<null | number>(
    null,
  )

  React.useEffect(() => {
    if (!walletAddress) return
    const asyncCheckMemmbership = async () => {
      // const membExp = await callContract('getMembershipExp', walletAddress)
      // const rawTime = await reach.getNetworkSecs()
      // const currentTime = fmtNum(rawTime)
      // const expiration = Number(membExp || 0)
      // console.log('currentTime', currentTime)
      // console.log('expiration', expiration)
      // const isValid = expiration > currentTime
      // console.log('is Valid', isValid)
    }
    asyncCheckMemmbership()
  }, [walletAddress])

  const asyncFetchBlockSecs = async () => {
    // const rawTime = await stdlib.getNetworkSecs()
    // const fmtTime = fmtNum(rawTime)
    // setCurrentBlockSecs(fmtTime)
  }

  React.useEffect(() => {
    asyncFetchBlockSecs()
  }, [])

  const handleBuyMembership = async () => {
    try {
      await ctc.buyMembership()
    } catch (e) {
      console.log('err buying membership', e)
      openModal(ModalType.ERROR, 'Error buying membership')
    }
  }

  const hasCurrentMembership = Boolean(user?.membershipExp)
  const membershipExpired = user?.membershipExp > currentBlockSecs
  const showBuyMembButton = (user && !hasCurrentMembership) || membershipExpired

  return (
    <Container>
      <Section>
        {walletAddress && (
          <WalletAddress>{truncateWalletAddress(walletAddress)}</WalletAddress>
        )}
        {!walletAddress && (
          <AuthButtonContainer>
            <LoginButton onClick={authenticate}>Login</LoginButton>
            <SignupButton onClick={authenticate}>Signup</SignupButton>
          </AuthButtonContainer>
        )}
        {showBuyMembButton && (
          <SidebarButton onClick={handleBuyMembership}>
            Buy Membership
          </SidebarButton>
        )}
      </Section>
      <Section>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.path} href={link.path}>
            {link.title}
          </NavLink>
        ))}
      </Section>
      {walletAddress && <LogoutButton onClick={logout}>Logout</LogoutButton>}
    </Container>
  )
}
