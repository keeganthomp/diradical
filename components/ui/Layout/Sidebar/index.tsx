import styled from 'styled-components'
import { SlMusicToneAlt } from 'react-icons/sl'
import { BsPerson } from 'react-icons/bs'
import NavLink from 'components/ui/Layout/Sidebar/NavLink'
import { devices } from 'styles/theme'
import useReachAccount from 'hooks/useReachAccount'
import { fmtNum } from 'contracts'
import React from 'react'
import useContract from 'hooks/useCtc'
import { truncateAddress } from 'lib/reach'
import useUser from 'hooks/useUser'
import API from 'lib/api'
import stdlib from 'lib/reach'
import { useSWRConfig } from 'swr'
import Wallet from './Wallet'
import useMusic from 'hooks/useMusic'

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
    background: #808080;
    &:hover {
      opacity: 1;
      cursor: not-allowed;
    }
  }
`

const BuyMembershipButton = styled(Button)`
  color: #fff;
  background: rgba(229, 232, 235, 0.2);
  &:hover {
    background: rgba(229, 232, 235, 0.15);
  }
`
const ConnectButton = styled(Button)`
  margin-bottom: 1rem;
`

export default function Sidebar() {
  const { tracks, isLoading: isFetchingTracks } = useMusic()
  const { mutate } = useSWRConfig()
  const { connectWallet, reachAcc } = useReachAccount()
  const { user } = useUser()
  const [isConnecting, setConnecting] = React.useState(false)
  const [currentBlockSecs, setCurrentBlockSecs] = React.useState<null | number>(
    null,
  )
  const contract = useContract()

  React.useEffect(() => {
    const asyncFetchBlockSecs = async () => {
      const rawTime = await stdlib.getNetworkSecs()
      const fmtTime = fmtNum(rawTime)
      setCurrentBlockSecs(fmtTime)
    }
    asyncFetchBlockSecs()
  }, [])

  React.useEffect(() => {
    const asyncGetSongsState = async () => {
      const songIds = tracks.map((t) => t.songId)
      const g = await Promise.all(
        songIds.map((id) => contract.getSongViews(id, 1, reachAcc)),
      )
      console.log('woop', g)
    }
    if (reachAcc && !isFetchingTracks) asyncGetSongsState()
  }, [reachAcc, isFetchingTracks])

  const buyMembership = async () => {
    if (!reachAcc) return
    const exp = await contract.buyMembership(reachAcc)
    await API.updateUser(reachAcc.networkAccount.address, exp)
    mutate(`/api/user/${reachAcc.networkAccount.address}`)
  }

  const handleConnect = async () => {
    setConnecting(true)
    await connectWallet()
    setConnecting(false)
  }

  const hasCurrentMembership = Boolean(user?.membershipExp)
  const membershipExpired = user?.membershipExp > currentBlockSecs
  const showBuyMembButton = (user && !hasCurrentMembership) || membershipExpired

  return (
    <Container>
      <ConnectButton disabled={isConnecting} onClick={handleConnect}>
        {isConnecting
          ? '...'
          : reachAcc
          ? truncateAddress(reachAcc?.networkAccount?.address)
          : 'Connect Wallet'}
      </ConnectButton>
      {showBuyMembButton && (
        <BuyMembershipButton onClick={buyMembership}>
          Buy Membership
        </BuyMembershipButton>
      )}
      {NAV_LINKS.map((link) => (
        <NavLink key={link.path} href={link.path}>
          {link.title}
        </NavLink>
      ))}
      <Wallet />
    </Container>
  )
}
