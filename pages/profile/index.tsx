import styled from 'styled-components'
import React, { useEffect } from 'react'
import { devices } from 'styles/theme'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import useProfile from 'hooks/useProfile'
import ProfileTabs from 'components/profile/Tabs'
import MyMusic from 'components/profile/MyMusic'
import Payouts from 'components/profile/Payouts'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 4.5rem;
  @media ${devices.mobile} {
    overflow: hidden;
    padding-bottom: 10px;
  }
`

export default function ProfilePage() {
  const { activeTab } = useProfile()
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  return (
    <Container>
      <ProfileTabs />
      {activeTab === 'tracks' && <MyMusic />}
      {activeTab === 'payouts' && <Payouts />}
    </Container>
  )
}
