import styled from 'styled-components'
import React from 'react'
import useContract from 'hooks/useContract'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useWallet'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import useSeason from 'hooks/useSeason'
import { formatCurrency } from 'utils'
import { ErrorMessage } from 'types'
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
  const { walletAddress } = useMagicWallet()
  const { endVotingPeriod } = useContract()
  const { openModal, ModalType } = useModal()

  const handleEndVotingPeriod = async () => {
    try {
      setIsEnding(true)
      const { newSeason, newEnd } = await endVotingPeriod()
      const fmtEndTime = moment(newEnd * 1000).fromNow()
    } catch (err) {
      if (err.message === ErrorMessage.SEASON_NOT_OVER) {
        openModal(ModalType.ERROR, 'Season not over yet!')
      } else {
        openModal(ModalType.ERROR, 'Unable to start new season')
      }
    } finally {
      setIsEnding(false)
    }
  }

  if (!season)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  const timeFromNow = moment(season.endPeriodTime * 1000).fromNow()

  return (
    <Container>
      <Season>Season {season.currentSeason}</Season>
      <SeasonEnd>{`Season ${season.currentSeason} ${
        season.hasEnded ? 'ended' : 'ends'
      } ${timeFromNow}`}</SeasonEnd>
      <StatsContainer>
        <Stat>
          <StatLabel>Votes</StatLabel>
          <StatNumber>{season.votes}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Payouts</StatLabel>
          <StatNumber>{formatCurrency(season.payout)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Members</StatLabel>
          <StatNumber>{season.members}</StatNumber>
        </Stat>
      </StatsContainer>
      {walletAddress &&
        season.hasEnded &&
        (isEnding ? (
          <Loader color='#000' />
        ) : (
          <EndVotingPeriodButton onClick={handleEndVotingPeriod}>
            Start Season {season.currentSeason + 1}
          </EndVotingPeriodButton>
        ))}
    </Container>
  )
}
