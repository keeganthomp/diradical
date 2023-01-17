import styled from 'styled-components'
import React, { useEffect } from 'react'
import { devices } from 'styles/theme'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import ProfileTabs from 'components/profile/Tabs'
import profileState from 'atoms/profile'
import { useRecoilValue } from 'recoil'
import MyMusic from 'components/profile/MyMusic'
import PayoutsToReceive from 'components/profile/PayoutsToReceive'
import PayoutsToSend from 'components/profile/PayoutsToSend'

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
  const { activeTab } = useRecoilValue(profileState)
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
      {activeTab === 'payoutsToReceive' && <PayoutsToReceive />}
      {activeTab === 'payoutsSent' && <PayoutsToSend />}
    </Container>
  )
}
