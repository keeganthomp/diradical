import React, { useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { Button } from 'components/ui/Buttons'
import styled from 'styled-components'
import useApi from 'hooks/useApi'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Balance = styled.p`
  padding-bottom: 2rem;
  text-align: center;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

const ReceivePayoutsButton = styled(Button)`
  font-size: 16px;
  height: 2rem;
  width: 15rem;
`

export default function PayoutsToReceive() {
  const { receivePayout } = useApi()
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating, payout } = useUser()

  // amount is in cents
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount / 100)
  }

  const handleReceivePayouts = async () => {
    await receivePayout(user.id)
  }

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  return (
    <Wrapper>
      <Title>Payouts</Title>
      <Balance>Balance: {formatCurrency(payout)}</Balance>
      <ReceivePayoutsButton onClick={handleReceivePayouts} disabled={!payout}>
        Receive Payouts
      </ReceivePayoutsButton>
    </Wrapper>
  )
}
