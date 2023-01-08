import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import React from 'react'
import Loader from 'components/ui/Loader'
import { devices } from 'styles/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 4.5rem;
  @media ${devices.mobile} {
    overflow: hidden;
    padding-bottom: 10px;
  }
`

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

export default function RegistrationSuccessPage() {
  return (
    <Container>
      <Title>Registration Success</Title>
    </Container>
  )
}
