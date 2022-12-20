import styled from 'styled-components'
import { truncateWalletAddress } from 'utils'
import useMagicWallet from 'hooks/useMagicWallet'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
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
`
const WalletAddress = styled.p`
  margin: 0;
  color: #000;
  font-weight: 100;
  text-align: left;
  font-size: 14px;
`

function UserInfo() {
  const { showWallet, isLoggedIn } = useMagicWallet()
  const ctc = useContract()
  const { user } = useUser()

  if (!isLoggedIn) return null

  const isMembershipValid =
    ctc?.currentSecs && user && user.membershipExp > ctc.currentSecs
  const showExpiredMessage = isLoggedIn && !isMembershipValid

  return (
    <Container onClick={showWallet}>
      <ProfilePicture />
      <MetaData>
        <WalletAddress>
          {truncateWalletAddress('3242342342323424')}
        </WalletAddress>
      </MetaData>
    </Container>
  )
}

export default UserInfo
