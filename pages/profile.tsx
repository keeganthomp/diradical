import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'
import { devices } from 'styles/theme'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

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

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

export default function ProfilePage() {
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()
  const { tracks, isFetching, mutate } = useUserMusic(user?.username)

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  if (isFetching)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  return (
    <Container>
      <Title>My Music</Title>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
