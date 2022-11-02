import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import Loader from 'components/ui/Loader'
import useMusic from 'hooks/useMusic'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function HomePage() {
  const { isLoading, error, data: tracks } = useMusic()
  if (isLoading) return <Loader />
  if (error || !Array.isArray(tracks)) return <p>Error</p>
  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
