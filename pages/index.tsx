import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import useCatalog from 'hooks/music/useCatalog'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-bottom: 4.5rem;
  height: 100%;
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function HomePage() {
  const { tracks, isLoading } = useCatalog()

  if (isLoading)
    return (
      <LoadingContainer>
        <Loader color='#000' />
      </LoadingContainer>
    )

  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
