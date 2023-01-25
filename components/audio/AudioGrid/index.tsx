import styled from 'styled-components'
import AudioCard from './AudioCard'
import { Track } from 'types'
import { devices } from 'styles/theme'
import React from 'react'
import { Button } from 'components/ui/Buttons'
import { useRouter } from 'next/router'

const DEF_NUM_OF_COLUMNS = 5

const NoTracksContainer = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 16px;
    padding-bottom: 1rem;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${DEF_NUM_OF_COLUMNS}, 1fr);
  grid-gap: 1.75rem;
  justify-items: center;
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

export default function AudioGrid({ tracks }: { tracks: Track[] }) {
  const router = useRouter()
  if (tracks.length === 0) {
    return (
      <NoTracksContainer>
        <p>No Tracks</p>
        <Button onClick={() => router.push('/upload')}>Go Upload</Button>
      </NoTracksContainer>
    )
  }
  return (
    <Grid>
      {tracks.map((track: Track) => (
        <AudioCard key={track.id} track={track} />
      ))}
    </Grid>
  )
}
