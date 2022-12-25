import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { devices } from 'styles/theme'
import useCatalog from 'hooks/music/useCatalog'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  overflow-y: auto;
  padding-bottom: 4.5rem;
  height: 100%;
  @media ${devices.mobile} {
    overflow: hidden;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ListenPage() {
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