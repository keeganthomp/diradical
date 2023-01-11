import styled from 'styled-components'
import React from 'react'
import Loader from 'components/ui/Loader'
import useSeason from 'hooks/useSeason'
import { devices } from 'styles/theme'

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  justify-content: flex-start;
  @media ${devices.mobile} {
    overflow: hidden;
  }
`

const Season = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`
const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 100%;
  padding: 2rem;
  @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Stat = styled.div`
  font-size: 2rem;
  background: #f2f2f29d;
  border-radius: 10px;
`
const StatLabel = styled.p`
  font-size: 2.25rem;
`
const StatNumber = styled.p`
  font-weight: 200;
`

export default function Sidebar() {
  const { season } = useSeason()

  if (!season)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  return (
    <Container>
      <Season>Season {season.id}</Season>
      <StatsContainer>
        <Stat>
          <StatLabel>Plays</StatLabel>
          <StatNumber>{season.plays}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Members</StatLabel>
          <StatNumber>{season.memberships}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Payouts</StatLabel>
          <StatNumber>{season.memberships}</StatNumber>
        </Stat>
      </StatsContainer>
    </Container>
  )
}
