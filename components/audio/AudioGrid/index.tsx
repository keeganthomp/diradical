import styled from 'styled-components'
import AudioCard from './AudioCard'
import { TrackWithArtist } from 'types'
import { devices } from 'styles/theme'

const DEF_NUM_OF_COLUMNS = 6

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${DEF_NUM_OF_COLUMNS}, 1fr);
  grid-gap: 0.5rem;
  justify-items: center;
  @media ${devices.large} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${devices.medium} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${devices.small} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`

type Props = {
  tracks: TrackWithArtist[]
}

export default function AudioGrid({ tracks }: Props) {
  return (
    <Grid>
      {tracks.map((track: TrackWithArtist) => (
        <AudioCard key={track.id} track={track} />
      ))}
    </Grid>
  )
}
