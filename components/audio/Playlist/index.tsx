import styled from 'styled-components'
import { Track } from 'types'
import PlaylistItem from './PlaylistItem'
import { devices } from 'styles/theme'

type Props = {
  tracks: Track[]
}

const Container = styled.div`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 40rem;
  overflow-y: scroll;
  @media ${devices.mobile} {
    width: 100%;
  }
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
