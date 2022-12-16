import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import prisma from 'lib/prisma'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function HomePage({ tracks = [] }) {
  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}

export async function getStaticProps() {
  const tracks = await prisma.track.findMany({
    where: { archived: false },
    include: { artist: { select: { wallet: true } } },
  })
  return {
    props: {
      tracks: JSON.parse(JSON.stringify(tracks)),
    },
  }
}
