import styled from 'styled-components'
import AudioCard from './AudioCard'
import { TrackWithArtist } from 'types'
import { devices } from 'styles/theme'
import React from 'react'

const DEF_NUM_OF_COLUMNS = 5

const NoTracksContainer = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 2rem;
`

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

export default function AudioGrid({ tracks }: { tracks: TrackWithArtist[] }) {
  if (tracks.length === 0) {
    return (
      <NoTracksContainer>
        <p>No Tracks</p>
      </NoTracksContainer>
    )
  }
  return (
    <Grid>
      {tracks.map((track: TrackWithArtist) => (
        <AudioCard key={track.id} track={track} />
      ))}
    </Grid>
  )
}
