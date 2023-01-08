import styled from 'styled-components'
import { devices } from 'styles/theme'
import React from 'react'
import { SidebarButton } from 'components/ui/Buttons'
import { NAV_LINKS } from 'const'
import { BsPeople } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import { useRouter } from 'next/router'
import UserIfno from './User'
import useUser from 'hooks/useUser'
import useApi from 'hooks/useApi'

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
  const [isRegistering, setIsRegistering] = React.useState(false)
  const [isBuyingMembership, setIsBuyingMembership] = React.useState(false)
  const { purchaseMembership, registerArtist } = useApi()
  const router = useRouter()
  const { isAuthenticated } = useUser()

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

  return (
    <Container>
      <Logo onClick={() => router.push('/')}>DIERAD</Logo>
      <Content>
        {!isAuthenticated && (
          <LoginButton
            icon={<BiLogIn />}
            onClick={() => router.push('/signin')}
          >
            Login
          </LoginButton>
        )}
        {isAuthenticated && (
          <>
            <LoginButton
              disabled={isRegistering}
              icon={<BiLogIn />}
              onClick={handleArtistRegistration}
            >
              Register as Artist
            </LoginButton>
            <SidebarButton
              icon={<BsPeople />}
              disabled={isBuyingMembership}
              onClick={handlePurchaseMembership}
            >
              Buy Membership
            </SidebarButton>
          </>
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
