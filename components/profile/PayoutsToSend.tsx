import React, { useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import useProfile from 'hooks/useProfile'
import { Button } from 'components/ui/Buttons'
import styled from 'styled-components'
import useApi from 'hooks/useApi'

const Wrapper = styled.div``

export default function PayoutsToSend() {
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

  const { payoutsToMake } = account

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  return (
    <Wrapper>
      {payoutsToMake.map((payout, i) => {
        return (
          <div key={i}>
            <p>{payout.username}</p>
            <p>{formatCurrency(payout.amtToGive)}</p>
          </div>
        )
      })}
    </Wrapper>
  )
}
