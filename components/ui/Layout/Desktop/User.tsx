import styled from 'styled-components'
import { useState } from 'react'
import { truncateWalletAddress } from 'utils'
import useMagicWallet from 'hooks/useWallet'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import { BsChevronCompactUp } from 'react-icons/bs'
import useOutsideClick from 'hooks/useClickOutside'
import { MdContentCopy } from 'react-icons/md'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  overflow: hidden;
`

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3rem 1fr;
  padding: 10px;
  border-top: 1px solid #f0f0f0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  background: white;
  z-index: 2;
  &:hover {
    background: #f8f8f8;
  }
`

const LogoutButton = styled.p`
  color: red;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const ProfilePicture = styled.div`
  background: ${({ theme }) => theme.colors.main};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  flex-basis: 2rem;
  border: 1px solid #b9b9b997;
`

const MetaData = styled.div`
  width: 100%;
  display: flex;
`
const WalletAddress = styled.p`
  color: #000;
  font-weight: 100;
  text-align: left;
  font-size: 14px;
  flex-grow: 1;
`

const MenuContainer = styled.div<{ open?: boolean }>`
  text-align: center;
  font-size: 14px;
  padding: 0.5rem 0;
  padding: 10px;
  position: relative;
  bottom: ${(p) => (p.open ? 0 : '-8rem')};
  transition: all 0.2s ease-in-out;
  z-index: 1;
`

const MenuItem = styled.p<{ isInfo?: boolean }>`
  padding: 4px 0;
  cursor: ${({ isInfo }) => (isInfo ? 'default' : 'pointer')};
  border-radius: 10px;
  margin-bottom: 5px;
  &:hover {
    background: ${({ isInfo }) => (isInfo ? 'transparent' : '#f0f0f09d')};
  }
`

const CopyButton = styled(MenuItem)<{ didCopy?: boolean }>`
  background: ${({ didCopy }) => (didCopy ? '#aaffa245' : 'transparent')};
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ isInfo, didCopy }) =>
      didCopy ? '#aaffa245' : isInfo ? 'transparent' : '#f0f0f09d'};
  }
`

const Chevron = styled(BsChevronCompactUp)<{ open?: boolean }>`
  ${({ open }) => open && 'transform: rotate(180deg);'}
  transition: all 0.15s ease-in-out;
  color: #a5a5a5b0;
  flex-grow: 1;
`

function UserInfo() {
  const [didCopy, setDidCopy] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const { isLoggedIn, logout, walletAddress, balance } = useMagicWallet()
  const ctc = useContract()
  const { user } = useUser()

  const ref = useOutsideClick(() => setOpen(false))

  if (!isLoggedIn) return null

  const toggleOpen = () => setOpen(!isOpen)

  const isMembershipValid =
    ctc?.currentSecs && user && user.membershipExp > ctc.currentSecs
  const showExpiredMessage = isLoggedIn && !isMembershipValid

  const getMembershipText = () => {
    if (showExpiredMessage) return `Membership Expired`
    return 'Membership is Valid'
  }

  const handleLogout = async () => {
    await logout()
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    setDidCopy(true)
    setTimeout(() => setDidCopy(false), 1000)
  }

  return (
    <Wrapper ref={ref}>
      <MenuContainer open={isOpen}>
        <MenuItem isInfo>{getMembershipText()}</MenuItem>
        <MenuItem isInfo>{balance} MATIC</MenuItem>
        <CopyButton didCopy={didCopy} onClick={copyAddress}>
          Copy address <MdContentCopy />
        </CopyButton>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </MenuContainer>
      <Container onClick={toggleOpen}>
        <ProfilePicture />
        <MetaData>
          <WalletAddress>{truncateWalletAddress(walletAddress)}</WalletAddress>
          <Chevron open={isOpen} />
        </MetaData>
      </Container>
    </Wrapper>
  )
}

export default UserInfo
