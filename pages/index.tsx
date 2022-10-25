import React from 'react'
import styled from 'styled-components'
import { TrackWithArtist } from 'types'
import AudioGrid from 'components/audio/AudioGrid'
import { useQuery } from 'react-query'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function HomePage() {
  const {
    isLoading,
    error,
    data: tracks,
  } = useQuery<TrackWithArtist[]>(
    'tracks',
    () => fetch(`/api/tracks`).then((res) => res.json()),
    {
      refetchInterval: 20000,
    },
  )
  if (isLoading) return <Loader />
  if (error || !Array.isArray(tracks)) return <p>Error</p>
  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
