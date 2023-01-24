import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { useRouter } from 'next/router'
import Loader from 'components/ui/Loader'
import useAlbum from 'hooks/music/useAlbum'
import Playlist from 'components/audio/Playlist'
import { devices } from 'styles/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 2.25rem;
`
const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`
const AlbumImage = styled.img`
  width: 8rem;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
  @device ${devices.mobile} {
    width: 100%;
  }
`

export default function ArtistPage() {
  const router = useRouter()
  const albumId = router.query.albumId

  const { album, isFetching } = useAlbum(albumId as string)

  if (isFetching) return <Loader color='#000' />

  return (
    <Container>
      <Title>{album.title}</Title>
      <AlbumImage src={album.art} />
      <Playlist tracks={album.tracks} />
    </Container>
  )
}
