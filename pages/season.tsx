import styled from 'styled-components'
import React from 'react'
import useModal from 'hooks/useModal'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import useSeason from 'hooks/useSeason'
import { devices } from 'styles/theme'
import moment from 'moment'

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

const EndVotingPeriodButton = styled(Button)`
  width: 10rem;
  margin-bottom: 10px;
`

const Season = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`
const SeasonEnd = styled.p`
  font-size: 14px;
  font-style: italic;
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
  const [isEnding, setIsEnding] = React.useState(false)
  const { season } = useSeason()
  const { openModal, ModalType } = useModal()

  const handleEndVotingPeriod = async () => {}

  if (!season)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  const timeFromNow = moment(season.endPeriodTime * 1000).fromNow()

  return (
    <Container>
      <Season>Season {season.id}</Season>
      {/* <SeasonEnd>{`Season ${season.currentSeason} ${
        season.hasEnded ? 'ended' : 'ends'
      } ${timeFromNow}`}</SeasonEnd> */}
      <StatsContainer>
        <Stat>
          <StatLabel>Payouts</StatLabel>
        </Stat>
        <Stat>
          <StatLabel>Members</StatLabel>
        </Stat>
      </StatsContainer>
      <EndVotingPeriodButton onClick={handleEndVotingPeriod}>
        {/* Start Season {season.currentSeason + 1} */}
      </EndVotingPeriodButton>
    </Container>
  )
}
