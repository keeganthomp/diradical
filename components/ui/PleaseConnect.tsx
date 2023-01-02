import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import React from 'react'
import { useRouter } from 'next/router'
import useMagicWallet from 'hooks/useWallet'
import Loader from 'components/ui/Loader'

const LoginButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`

const Title = styled.p`
  font-weight: bold;
`

export default function PleaseConnect() {
  const router = useRouter()
  const { isAuthenticating } = useMagicWallet()
  return (
    <Container>
      <Title>{isAuthenticating ? 'Connecting...' : 'Please Connect'}</Title>
      {isAuthenticating ? (
        <Loader color='#000' />
      ) : (
        <LoginButton onClick={() => router.push('/authenticate')}>
          Login
        </LoginButton>
      )}
    </Container>
  )
}
