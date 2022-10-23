import React from 'react'
import styled from 'styled-components'
import Tabs from 'components/ui/Tabs'
import { Tab } from 'types'
import UserTacks from 'components/user/UserTracks'
import UserSettings from 'components/user/Settings'
import { getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'
import { getWalletFromMdk } from 'lib/encryption'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
`

const ProfilePage = () => {
  const ProfileTabs: Tab[] = [
    {
      title: 'My Music',
      Component: UserTacks,
    },
    {
      title: 'Settings',
      Component: () => <UserSettings />,
    },
  ]

  return (
    <Container>
      <Tabs tabs={ProfileTabs} />
    </Container>
  )
}

export default ProfilePage
