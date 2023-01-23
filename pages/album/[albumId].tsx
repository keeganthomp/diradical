import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { useRouter } from 'next/router'
import Loader from 'components/ui/Loader'
import useAlbum from 'hooks/music/useAlbum'
import Playlist from 'components/audio/Playlist'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`
const AlbumImage = styled.img`
  width: 20rem;
  height: 20rem;
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
