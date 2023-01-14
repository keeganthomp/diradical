import React, { useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import useProfile from 'hooks/useProfile'
import { Button } from 'components/ui/Buttons'
import styled from 'styled-components'

const Wrapper = styled.div``
const Balance = styled.p`
  padding-bottom: 2rem;
  text-align: center;
`

const ReceivePayoutsButton = styled(Button)``

export default function Account() {
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()
  const { account } = useProfile()

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  return (
    <Wrapper>
      <Balance>Balance: {account.balance}</Balance>
      <ReceivePayoutsButton disabled={!account.balance}>
        Receive Payouts
      </ReceivePayoutsButton>
    </Wrapper>
  )
}
