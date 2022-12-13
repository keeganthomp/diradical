import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import React from 'react'
import { devices } from 'styles/theme'
import { useRouter } from 'next/router'
import { IoCloseOutline } from 'react-icons/io5'
import useMagicWallet from 'hooks/useMagicWallet'
import useContract from 'hooks/useContract'
import useUser from 'hooks/useUser'
import Loader from 'components/ui/Loader'
import moment from 'moment'
import useModal from 'hooks/useModal'

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: saturate(180%) blur(20px);
  -webkitbackdropfilter: saturate(180%) blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkitbackdropfilter: saturate(180%) blur(20px);
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  top: 0;
  left: 0;
  height: 2.75rem;
  position: fixed;
  display: none;
  z-index: 10;
  @media ${devices.mobile} {
    display: flex;
  }
`
const Content = styled.div`
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

const Hamburger = styled(FaBars)`
  color: #fff;
  cursor: pointer;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListItem = styled.span`
  color: #fff;
  margin: 8px 0;
`

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  margin: 0;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  opacity: 0.5;
  cursor: pointer;
  color: #fff;
  z-index: 11;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
`

export default function MobileNavbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const { authenticate, logout, walletAddress, isLoggedIn, showWallet } =
    useMagicWallet()
  const ctc = useContract()
  const { user } = useUser()
  const { openModal, ModalType } = useModal()

  const toggle = () => setIsOpen(!isOpen)

  const handleRouteChange = (to: string) => {
    router.push(to)
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleEndVotingPeriod = async () => {
    try {
      await ctc.endVotingPeriod()
    } catch {
      openModal(ModalType.ERROR, 'Error ending voting period')
    }
  }

  return (
    <>
      <Container>
        <Hamburger onClick={toggle} />
      </Container>
      {isOpen && (
        <>
          <Overlay />
          <CloseIcon onClick={handleClose} />
          <Content>
            <List>
              {!isLoggedIn && (
                <>
                  <ListItem onClick={authenticate}>Login</ListItem>
                  <ListItem onClick={authenticate}>Signup</ListItem>
                </>
              )}
              <ListItem onClick={() => handleRouteChange('/')}>Music</ListItem>
              {isLoggedIn && (
                <>
                  <ListItem onClick={logout}>Logout</ListItem>
                  <ListItem onClick={showWallet}>Wallet</ListItem>
                </>
              )}
            </List>
            <Info>
              {!ctc || ctc.isFetchingViews ? (
                <Loader color='#fff' />
              ) : (
                <>
                  {user && (
                    <p>
                      {ctc.currentSecs > user.membershipExp
                        ? 'Membership Expired'
                        : `Membership Exp: ${moment(
                            user.membershipExp * 1000,
                          ).fromNow()}`}
                    </p>
                  )}
                  <p>Contract Balance: {ctc.contractBalance}</p>
                  <p>Membership Cost: {ctc.membershipCost}</p>
                  <p>Current Voting Period: {ctc.votingPeriod}</p>
                  <p>
                    {ctc.currentSecs > ctc.endPeriodTime
                      ? `Period ${ctc.votingPeriod} Ended`
                      : `Period Ends: ${moment(
                          ctc.endPeriodTime * 1000,
                        ).fromNow()}`}
                  </p>
                  {walletAddress && ctc.currentSecs > ctc.endPeriodTime && (
                    <button onClick={handleEndVotingPeriod}>
                      End Voting Period
                    </button>
                  )}
                </>
              )}
            </Info>
          </Content>
        </>
      )}
    </>
  )
}
