import styled from 'styled-components'
import React from 'react'
import LoginForm from 'components/forms/LoginForm'

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
  return (
    <Container>
      <Title>Login</Title>
      <LoginForm />
    </Container>
  )
}
