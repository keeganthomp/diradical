import styled from 'styled-components'
import AudioCard from './AudioCard'
import { TrackWithVotes } from 'types'
import { devices } from 'styles/theme'
import useMusic from 'hooks/useMusic'
import Loader from 'components/ui/Loader'

const DEF_NUM_OF_COLUMNS = 5

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${DEF_NUM_OF_COLUMNS}, 1fr);
  grid-gap: 1.25rem;
  justify-items: center;
  row-gap: 1.5rem;
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

export default function AudioGrid({ wallet }: { wallet?: string }) {
  const { tracks, isLoading } = useMusic(wallet)
  if (isLoading && !tracks) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  if (tracks.length === 0) {
    return <div>no tracks</div>
  }
  return (
    <Grid>
      {tracks.map((track: TrackWithVotes) => (
        <AudioCard key={track.id} track={track} />
      ))}
    </Grid>
  )
}
