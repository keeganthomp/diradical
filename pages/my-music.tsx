import AudioGrid from 'components/audio/AudioGrid'
import React, { useEffect } from 'react'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { devices } from 'styles/theme'

const Wrapper = styled.div`
  text-align: center;
  overflow-y: auto;
  padding-bottom: 4.5rem;
  height: 100%;
  @media ${devices.mobile} {
    overflow: hidden;
    padding-bottom: 10px;
  }
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

export default function MyMusicPage() {
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()
  const { singles, albums, isFetching } = useUserMusic(user?.username)

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
      <p>Singles</p>
      <AudioGrid tracks={singles} />
      {albums.length > 0
        ? albums.map((album) => (
            <div key={album.id}>
              <p>{album.title}</p>
              <AudioGrid tracks={album.tracks} />
            </div>
          ))
        : null}
    </Wrapper>
  )
}
