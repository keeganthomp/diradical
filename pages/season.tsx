import styled from 'styled-components'
import React from 'react'
import useContract from 'hooks/useContract'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useMagicWallet'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import useSeason from 'hooks/useSeason'

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const EndVotingPeriodButton = styled(Button)`
  width: 10rem;
`

export default function Sidebar() {
  const { season } = useSeason()
  const { walletAddress } = useMagicWallet()
  const ctc = useContract()
  const { openModal, ModalType } = useModal()

  const handleEndVotingPeriod = async () => {
    try {
      await ctc.endVotingPeriod()
    } catch {
      openModal(ModalType.ERROR, 'Error ending voting period')
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
      <p>Current Season: {season.current}</p>
      <p>{`Season ${season.current} ${season.hasEnded ? 'ended' : 'ends'} ${
        season.end
      }`}</p>
      {walletAddress && ctc.currentSecs > ctc.endPeriodTime && (
        <EndVotingPeriodButton onClick={handleEndVotingPeriod}>
          Start Season {ctc.votingPeriod + 1}
        </EndVotingPeriodButton>
      )}
    </Container>
  )
}
