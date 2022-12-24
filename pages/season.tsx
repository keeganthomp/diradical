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
  const { season, updateSeason } = useSeason()
  const { walletAddress } = useMagicWallet()
  const ctc = useContract()
  const { openModal, ModalType } = useModal()

  const handleEndVotingPeriod = async () => {
    try {
      setIsEnding(true)
      const { newSeason, newEnd } = await ctc.endVotingPeriod()
      const fmtEndTime = moment(newEnd * 1000).fromNow()
      updateSeason({
        current: newSeason,
        end: fmtEndTime,
        payout: 0,
        members: 0,
        votes: 0,
        hasEnded: false,
      })
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

  return (
    <Container>
      <Season>Season {season.current}</Season>
      <SeasonEnd>{`Season ${season.current} ${
        season.hasEnded ? 'ended' : 'ends'
      } ${season.end}`}</SeasonEnd>
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
            Start Season {ctc.votingPeriod + 1}
          </EndVotingPeriodButton>
        ))}
    </Container>
  )
}
