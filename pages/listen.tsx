import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { devices } from 'styles/theme'
import useCatalog from 'hooks/music/useCatalog'
import Loader from 'components/ui/Loader'
import AudioRow from 'components/audio/AudioRow'

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${devices.mobile} {
    overflow: hidden;
    padding-bottom: 10px;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ListenPage() {
  const { singles, albums, isFetching } = useCatalog()

  if (isFetching)
    return (
      <LoadingContainer>
        <Loader color='#000' />
      </LoadingContainer>
    )

  return (
    <Container>
      <AudioRow title='Singles' tracks={singles} />
      <AudioRow title='Albums' albums={albums} />
    </Container>
  )
}
