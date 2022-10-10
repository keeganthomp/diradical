import React from 'react'
import prisma from 'lib/prisma'
import styled from 'styled-components'
import { TrackWithArtist } from 'types'
import AudioGrid from 'components/audio/AudioGrid'

type Props = {
  tracks: TrackWithArtist[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function HomePage({ tracks }: Props) {
  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}

export async function getStaticProps() {
  const tracks = await prisma.track.findMany({
    include: {
      artist: true,
    },
  })
  return {
    props: {
      tracks: JSON.parse(JSON.stringify(tracks)) as Props,
    },
  }
}
