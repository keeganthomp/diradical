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
    </Container>
  )
}
