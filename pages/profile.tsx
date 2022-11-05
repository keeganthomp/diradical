import React from 'react'
import styled from 'styled-components'
import Tabs from 'components/ui/Tabs'
import { Tab } from 'types'
import UserTacks from 'components/user/MyMusic'
import Portfolio from 'components/user/Portfolio'
import UserSettings from 'components/user/Settings'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000;
`

const ProfilePage = () => {
  const ProfileTabs: Tab[] = [
    {
      title: 'Manage Music',
      Component: UserTacks,
    },
    {
      title: 'Portfolio',
      Component: Portfolio,
    },
    // {
    //   title: 'Account',
    //   Component: UserSettings,
    // },
  ]

  return (
    <Container>
      <Tabs tabs={ProfileTabs} />
    </Container>
  )
}

export default ProfilePage

export const getServerSideProps = withPageAuthRequired()
