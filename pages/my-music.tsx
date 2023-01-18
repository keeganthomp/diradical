import AudioGrid from 'components/audio/AudioGrid'
import React, { useEffect } from 'react'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

export default function MyMusicPage() {
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()
  const { tracks, isFetching } = useUserMusic(user?.username)

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  if (isFetching) return <Loader color='#000' />

  return (
    <Wrapper>
      <Title>My Music</Title>
      <AudioGrid tracks={tracks} />
    </Wrapper>
  )
}
