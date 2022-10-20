import { User } from '@prisma/client'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Button from 'components/ui/Buttons/Base'
import EditableField from 'components/ui/Inputs/EditableField'
import { useQuery } from 'react-query'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 0.5rem;
  }
  p {
    color: white;
  }
`

const UpdateButton = styled(Button)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const truncateWallet = (wallet: string) => {
  const first = wallet.slice(0, 6)
  const last = wallet.slice(-4)
  return `${first}...${last}`
}

const Wallet = styled.p`
  color: #b8b8b8;
`

export default function UserSettings() {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery<User & { wallet: string }>('user', () =>
    fetch('/api/user').then((res) => res.json()),
  )
  const [editingField, setEditingField] = useState<'username' | 'email' | null>(
    null,
  )
  const [vals, setVals] = useState({
    username: '',
    email: '',
  })

  useEffect(() => {
    if (!isLoading) {
      setVals({
        username: user?.username || '',
        email: user?.email || '',
      })
    }
  }, [isLoading])

  const handleUsernameChange = (e) =>
    setVals({ ...vals, username: e.target.value })
  const handleEmailChange = (e) => setVals({ ...vals, email: e.target.value })

  if (isLoading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    )

  if (error)
    return (
      <Container>
        <p>Error getting user</p>
      </Container>
    )

  return (
    <Container>
      <EditableField
        label='Username'
        isEditing={editingField === 'username'}
        value={vals.username}
        onChange={handleUsernameChange}
        onCancel={() => {
          setVals({ ...vals, username: user.username })
          setEditingField(null)
        }}
        onStartEdit={() => setEditingField('username')}
      />
      <EditableField
        label='Email'
        isEditing={editingField === 'email'}
        value={vals.email}
        onChange={handleEmailChange}
        onCancel={() => {
          setVals({ ...vals, email: user.email })
          setEditingField(null)
        }}
        onStartEdit={() => setEditingField('email')}
      />
      <Wallet>{truncateWallet(user.wallet)}</Wallet>
      {editingField && <UpdateButton>Update</UpdateButton>}
    </Container>
  )
}
