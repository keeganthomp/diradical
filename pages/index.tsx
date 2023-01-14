import React from 'react'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import { useRouter } from 'next/router'
import { Button } from 'components/ui/Buttons'

const Container = styled.div`
  padding: 3rem 4rem;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.mobile} {
    overflow: hidden;
    padding: 0.5rem;
  }
`

const Content = styled.div`
  width: 30rem;
  @media ${devices.mobile} {
    width: 100%;
  }
`

const PageTitle = styled.p`
  font-weight: bold;
  font-size: 3rem;
  line-height: 52px;
  padding-bottom: 1.25rem;
  @media ${devices.mobile} {
    font-size: 2.2rem;
    line-height: 40px;
  }
`

const Section = styled.div`
  padding-bottom: 2rem;
`
const Heading = styled.h1`
  font-size: 1.5rem;
  color: #363636;
`
const Description = styled.p`
  color: #969696;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ListenButton = styled(Button)`
  width: 12rem;
  border-radius: 20px;
  height: 2rem;
`

export default function HomePage() {
  const router = useRouter()
  return (
    <Container>
      <Content>
        <PageTitle>Music Streaming</PageTitle>
        <Section>
          <Heading>For Artist</Heading>
          <Description>
            A place for independent artists to share their music with the world
            and get paid failry for their work.
          </Description>
        </Section>
        <Section>
          <Heading>For Listeners</Heading>
          <Description>
            A place for music lovers to discover new music and support their
            favorite artists. You choose what artists get your monthly support.
          </Description>
        </Section>
        <ButtonContainer>
          <ListenButton onClick={() => router.push('/listen')}>
            Go Listen
          </ListenButton>
        </ButtonContainer>
      </Content>
    </Container>
  )
}
