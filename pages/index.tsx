import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'

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
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/tracks`)
  const tracks = await res.json()
  return {
    props: {
      tracks,
    },
  }
}
