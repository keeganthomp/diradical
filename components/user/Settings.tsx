import { User } from '@prisma/client'
import styled from 'styled-components'
import { useState } from 'react'
import Button from 'components/ui/Buttons/Base'
import EditableField from 'components/ui/Inputs/EditableField'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    color: white;
  }
`

const UpdateButton = styled(Button)`
background: ${(p) => p.theme.colors.main};}`

type Props = {
  user: User
  wallet: string
}

const Wallet = styled.p`
  color: #b8b8b8;
`

export default function UserSettings({ user, wallet }: Props) {
  const [editingField, setEditingField] = useState<'username' | 'email' | null>(
    null,
  )
  const [vals, setVals] = useState({
    username: user.username || '',
    email: user.email,
  })

  const handleUsernameChange = (e) =>
    setVals({ ...vals, username: e.target.value })
  const handleEmailChange = (e) => setVals({ ...vals, email: e.target.value })

  return (
    <Container>
      <EditableField
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
        isEditing={editingField === 'email'}
        value={vals.email}
        onChange={handleEmailChange}
        onCancel={() => {
          setVals({ ...vals, email: user.email })
          setEditingField(null)
        }}
        onStartEdit={() => setEditingField('email')}
      />
      <Wallet>{wallet}</Wallet>
      {editingField && <UpdateButton>Update</UpdateButton>}
    </Container>
  )
}
