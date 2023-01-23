import styled from 'styled-components'
import { Track } from 'types'
import PlaylistItem from './PlaylistItem'

type Props = {
  tracks: Track[]
}

const Container = styled.div`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 40rem;
`

export default function Playlist({ tracks }: Props) {
  return (
    <Container>
      {tracks.map((t) => (
        <PlaylistItem key={t.id} track={t} />
      ))}
    </Container>
  )
}
