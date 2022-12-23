import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import React from 'react'
import useMagicWallet from 'hooks/useMagicWallet'

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
  const { authenticate } = useMagicWallet()

  return (
    <Container>
      <Title>Please Connect</Title>
      <LoginButton onClick={authenticate}>Login</LoginButton>
    </Container>
  )
}
