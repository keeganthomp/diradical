import styled from 'styled-components'
import React from 'react'
import useContract from 'hooks/useContract'
import useModal from 'hooks/useModal'
import useMagicWallet from 'hooks/useMagicWallet'
import { Button } from 'components/ui/Buttons'
import Loader from 'components/ui/Loader'
import moment from 'moment'

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

  if (!ctc || ctc.isFetchingViews)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  return (
    <Container>
      <p>Membership Cost: {ctc.membershipCost}</p>
      <p>Current Voting Period: {ctc.votingPeriod}</p>
      <p>
        {ctc.currentSecs > ctc.endPeriodTime
          ? `Period ${ctc.votingPeriod} Ended`
          : `Period Ends: ${moment(ctc.endPeriodTime * 1000).fromNow()}`}
      </p>
      {walletAddress && ctc.currentSecs > ctc.endPeriodTime && (
        <EndVotingPeriodButton onClick={handleEndVotingPeriod}>
          End Voting Period
        </EndVotingPeriodButton>
      )}
    </Container>
  )
}
