import styled from 'styled-components'
import React from 'react'
import useMagicWallet from 'hooks/useMagicWallet'
import usePayouts, { Payout } from 'hooks/usePayouts'
import { Button } from 'components/ui/Buttons'
import { formatCurrency } from 'utils'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ReceivePayoutsButton = styled(Button)`
  width: 10rem;
`

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PayoutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PayoutCard = ({
  payout,
  onClick,
}: {
  payout: Payout
  onClick: (period: number) => void
}) => {
  return (
    <PayoutCardContainer key={payout.period}>
      <p>Season: {payout.period}</p>
      <p>Payout: {formatCurrency(payout.amount)}</p>
      <ReceivePayoutsButton onClick={onClick}>
        Receive Payout
      </ReceivePayoutsButton>
    </PayoutCardContainer>
  )
}

export default function Sidebar() {
  const { payouts, receivePayouts } = usePayouts()
  const { isAuthenticating, isLoggedIn } = useMagicWallet()

  if (!isLoggedIn)
    return (
      <CenterContainer>
        <p>Please Login</p>
      </CenterContainer>
    )

  if (isAuthenticating || !payouts)
    return (
      <CenterContainer>
        <Loader color='#000' />
      </CenterContainer>
    )

  return (
    <Container>
      {payouts.map((p) => (
        <PayoutCard
          key={p.period}
          payout={p}
          onClick={() => receivePayouts(p.period)}
        />
      ))}
    </Container>
  )
}
