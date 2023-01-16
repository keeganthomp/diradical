import React, { useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import useProfile from 'hooks/useProfile'
import { Button } from 'components/ui/Buttons'
import styled from 'styled-components'
import useApi from 'hooks/useApi'

const Wrapper = styled.div``
const Balance = styled.p`
  padding-bottom: 2rem;
  text-align: center;
`

const ReceivePayoutsButton = styled(Button)``

export default function Account() {
  const { receivePayout } = useApi()
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()
  const { account } = useProfile()

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
      <Balance>Balance: {formatCurrency(account.balance)}</Balance>
      <ReceivePayoutsButton
        onClick={handleReceivePayouts}
        disabled={!account.balance}
      >
        Receive Payouts
      </ReceivePayoutsButton>
    </Wrapper>
  )
}