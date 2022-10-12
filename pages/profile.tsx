import React from 'react'
import styled from 'styled-components'
import { User, Track, Album } from '@prisma/client'
import Tabs from 'components/ui/Tabs'
import { Tab } from 'types'
import UserTacks from 'components/user/UserTracks'
import UserSettings from 'components/user/Settings'
import UploadForm from 'components/forms/UploadForm'
import { useQuery } from 'react-query'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
`

type UserWithMusic =
  | (User & { singles: Track[]; albums: Album[]; wallet: string })
  | null

const ProfilePage = () => {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery<UserWithMusic>('profile', () =>
    fetch('/api/profile').then((res) => res.json()),
  )

  if (isLoading)
    return (
      <Container>
        <p style={{ color: 'white' }}>Loading...</p>
      </Container>
    )

  if (error) {
    return (
      <Container>
        <p>Error occured fetching profile</p>
      </Container>
    )
  }
  if (!user) {
    return (
      <Container>
        <h1>Please login or create account to view your profile</h1>
      </Container>
    )
  }

  const { singles: tracks } = user

  const ProfileTabs: Tab[] = [
    {
      title: 'Settings',
      Component: () => <UserSettings user={user} wallet={user.wallet} />,
    },
    {
      title: 'My Music',
      Component: () => <UserTacks tracks={tracks} user={user} />,
    },
    {
      title: 'Upload',
      Component: () => <UploadForm />,
    },
  ]

  return (
    <Container>
      <Tabs tabs={ProfileTabs} />
    </Container>
  )
}

export default ProfilePage
