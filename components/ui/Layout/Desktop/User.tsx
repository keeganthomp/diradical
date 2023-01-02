import styled from 'styled-components'
import { useState } from 'react'
import { truncateWalletAddress } from 'utils'
import useMagicWallet from 'hooks/useWallet'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import { BsChevronCompactUp } from 'react-icons/bs'
import useOutsideClick from 'hooks/useClickOutside'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
`

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3rem 1fr;
  padding: 10px;
  border-top: 1px solid #f0f0f0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #f0f0f09d;
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

const MenuContainer = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 0.5rem 0;
  padding: 10px;
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

const Chevron = styled(BsChevronCompactUp)<{ open?: boolean }>`
  ${({ open }) => open && 'transform: rotate(180deg);'}
  transition: all 0.15s ease-in-out;
  color: #a5a5a5b0;
  flex-grow: 1;
`

function UserInfo() {
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

  return (
    <Wrapper ref={ref}>
      {isOpen && (
        <MenuContainer>
          <MenuItem isInfo>{getMembershipText()}</MenuItem>
          <MenuItem isInfo>{balance} MATIC</MenuItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </MenuContainer>
      )}
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
