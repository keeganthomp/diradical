import styled from 'styled-components'
import React from 'react'
import { useRouter } from 'next/router'
import { IoCloseOutline } from 'react-icons/io5'
import { NAV_LINKS } from 'const'
import { SidebarButton } from 'components/ui/Buttons'
import { BsPeople } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import { signOut } from 'next-auth/react'
import useUser from 'hooks/useUser'
import useApi from 'hooks/useApi'
import { IoIosArrowDropright } from 'react-icons/io'

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(45px);
  -webkitbackdropfilter: saturate(180%) blur(45px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
`

const Menu = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  padding-top: 14rem;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
`

const LoginButton = styled(SidebarButton)`
  margin: 0;
`

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  margin: 0;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
  z-index: 11;
`

const LogoutButton = styled.p`
  color: red;
  cursor: pointer;
  font-size: 14px;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 4rem;
  position: absolute;
`

const ProfileContainer = styled.div`
  width: 100%;
  position: relative;
`
const Carrot = styled(IoIosArrowDropright)<{ isOpen: boolean }>`
  margin-right: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`
const ProfileText = styled.p`
  display: flex;
  padding: 10px;
  align-items: center;
`
const ProfileSubMenu = styled.div`
  position: absolute;
  padding-left: 2rem;
  display: grid;
  grid-gap: 0.75rem;
`
const ProfileItem = styled.p``

export default function MobileMenu({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false)
  const [isRegistering, setIsRegistering] = React.useState(false)
  const [isBuyingMembership, setIsBuyingMembership] = React.useState(false)
  const router = useRouter()
  const { user, isAuthenticated } = useUser()
  const { purchaseMembership, registerArtist } = useApi()

  const handleRoute = (path: string) => {
    setIsProfileOpen(false)
    router.push(path)
    close()
  }

  const handleClose = () => {
    setIsProfileOpen(false)
    close()
  }

  const handleLogout = async () => {
    try {
      signOut()
    } catch (err) {
      console.log('error logging out on mobile menu: ', err)
    }
  }

  const handleArtistRegistration = async () => {
    setIsRegistering(true)
    try {
      const accountLink = await registerArtist()
      window.location.href = accountLink.url
    } catch (e) {
      setIsRegistering(false)
      console.log('Error registering artist', e)
    }
  }

  const handlePurchaseMembership = async () => {
    setIsBuyingMembership(true)
    try {
      const res = await purchaseMembership()
      window.location.href = res.url
    } catch (e) {
      setIsBuyingMembership(false)
      console.log('Error buying membership', e)
    }
  }

  const handleLogin = () => {
    router.push('/signin')
    close()
  }

  if (!isOpen) return null

  return (
    <>
      <Overlay />
      <CloseIcon onClick={handleClose} />
      <Menu>
        <List>
          {!isAuthenticated && (
            <LoginButton icon={<BiLogIn />} onClick={handleLogin}>
              Login
            </LoginButton>
          )}
          {isAuthenticated && (
            <>
              {user.hasActiveMembership && !user.isArtist && (
                <SidebarButton
                  disabled={isRegistering}
                  icon={<BiLogIn />}
                  onClick={handleArtistRegistration}
                >
                  Register as Artist
                </SidebarButton>
              )}
              {!user.hasActiveMembership && (
                <SidebarButton
                  disabled={isBuyingMembership}
                  icon={<BsPeople />}
                  onClick={handlePurchaseMembership}
                >
                  Buy Membership
                </SidebarButton>
              )}
            </>
          )}
          {NAV_LINKS.map((link) => (
            <SidebarButton
              onClick={() => handleRoute(link.path)}
              icon={<link.icon />}
              key={link.title}
            >
              {link.title}
            </SidebarButton>
          ))}
          {user && (
            <ProfileContainer>
              <ProfileText onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <Carrot isOpen={isProfileOpen} />
                Profile
              </ProfileText>
              {isProfileOpen && (
                <ProfileSubMenu>
                  <ProfileItem onClick={() => handleRoute('/my-music')}>
                    My Music
                  </ProfileItem>
                  <ProfileItem onClick={() => handleRoute('/payouts')}>
                    Payouts
                  </ProfileItem>
                  <ProfileItem onClick={() => handleRoute('/season')}>
                    Season
                  </ProfileItem>
                </ProfileSubMenu>
              )}
            </ProfileContainer>
          )}
        </List>
        {isAuthenticated && (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        )}
      </Menu>
    </>
  )
}
