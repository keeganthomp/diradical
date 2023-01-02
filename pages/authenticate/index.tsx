import styled from 'styled-components'
import React from 'react'
import LoginForm from 'components/forms/LoginForm'
import useMagicWallet from 'hooks/useWallet'
import { useRouter } from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

export default function AuthenticaionPage() {
  const router = useRouter()
  const { isLoggedIn } = useMagicWallet()

  if (isLoggedIn) {
    router.push('/listen')
  }

  return (
    <Container>
      <Title>Login</Title>
      <LoginForm />
    </Container>
  )
}
