import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { useRouter } from 'next/router'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function ArtistPage() {
  const router = useRouter()
  const artist = router.query.artist

  const { tracks, isFetching } = useUserMusic(artist as string)

  if (isFetching) return <Loader color='#000' />

  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
