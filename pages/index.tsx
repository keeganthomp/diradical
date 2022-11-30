import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function HomePage() {
  return (
    <Container>
      <AudioGrid />
    </Container>
  )
}
