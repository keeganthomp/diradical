import styled from 'styled-components'
import React from 'react'
import useMagicWallet from 'hooks/useWallet'
import usePayouts from 'hooks/usePayouts'
import { Payout } from 'atoms/payouts'
import { Button } from 'components/ui/Buttons'
import { formatCurrency } from 'utils'
import Loader from 'components/ui/Loader'
import { devices } from 'styles/theme'
import PleaseConnect from 'components/ui/PleaseConnect'

const Wrapper = styled.div`
  height: 100%;
`

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  @media ${devices.mobile} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }
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
  background: #f2f2f29d;
  padding: 1rem;
  border-radius: 10px;
  @media ${devices.mobile} {
    width: 100%;
  }
`

const Season = styled.p`
  font-weight: bold;
`
const PayoutAmt = styled.p`
  padding: 1rem 0;
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
      <Season>Season {payout.period}</Season>
      <PayoutAmt>Payout: {formatCurrency(payout.amount)} MATIC</PayoutAmt>
      <ReceivePayoutsButton onClick={onClick}>
        Receive Payout
      </ReceivePayoutsButton>
    </PayoutCardContainer>
  )
}

export default function Sidebar() {
  const { payouts, receivePayouts } = usePayouts()
  const { isAuthenticating, isLoggedIn } = useMagicWallet()

  if (!isLoggedIn) return <PleaseConnect />

  if (isAuthenticating || !payouts)
    return (
      <CenterContainer>
        <Loader color='#000' />
      </CenterContainer>
    )

  return (
    <Wrapper>
      <Title>Payouts</Title>
      <Container>
        {payouts.map(
          (p) =>
            !p.received && (
              <PayoutCard
                key={p.period}
                payout={p}
                onClick={() => receivePayouts(p.period)}
              />
            ),
        )}
      </Container>
    </Wrapper>
  )
}
