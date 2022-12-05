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
  grid-area: sidebar;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  @media ${devices.mobile} {
    display: none;
  }
`

const WalletAddress = styled.p`
  margin: 0;
  margin-left: 1rem;
  color: white;
  font-weight: 100;
  padding: 0.5rem 0;
`

const Button = styled.button`
  background: ${(p) => p.theme.colors.main};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  padding: 0.5rem 0;
  transition: opacity 0.1s ease-in-out;
  margin-left: 1rem;
  width: 8rem;
  font-weight: 300;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`

const BuyMembershipButton = styled(Button)`
  color: #fff;
  background: rgba(229, 232, 235, 0.2);
  &:hover {
    background: rgba(229, 232, 235, 0.15);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    background: rgba(229, 232, 235, 0.2);
  }
`
const ConnectButton = styled(Button)`
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
      {walletAddress && <WalletAddress>{walletAddress}</WalletAddress>}
      {!walletAddress && (
        <>
          <button onClick={authenticate}>login</button>
          <button onClick={authenticate}>signup</button>
        </>
      )}
      {walletAddress && <button onClick={logout}>logout</button>}
      <BuyMembershipButton onClick={handleBuyMembership}>
        Buy Membership
      </BuyMembershipButton>

      {NAV_LINKS.map((link) => (
        <NavLink key={link.path} href={link.path}>
          {link.title}
        </NavLink>
      ))}
    </Container>
  )
}
