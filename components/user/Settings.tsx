import { User } from '@prisma/client'
import UsernameForm from 'components/forms/UsernameForm'
import styled from 'styled-components'

const Container = styled.div``

type Props = {
  user: User
  wallet: string
}

export default function UserSettings({ user, wallet }: Props) {
  console.log('user', user)
  return (
    <Container>
      <p>Wallet: {wallet}</p>
      {user?.username ? <p>Username: {user.username}</p> : <UsernameForm />}
      <p>Email: {user.email}</p>
    </Container>
  )
}
