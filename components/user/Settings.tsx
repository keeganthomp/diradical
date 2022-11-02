import styled from 'styled-components'
import { useState } from 'react'
import Button from 'components/ui/Buttons/Base'
import EditableField from 'components/ui/Inputs/EditableField'
import { useUser } from '@auth0/nextjs-auth0'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 0.5rem;
  }
  p {
    color: #000;
  }
`

const UpdateButton = styled(Button)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function UserSettings() {
  const { user } = useUser()
  const [editingField, setEditingField] = useState<'username' | 'email' | null>(
    null,
  )
  const [vals, setVals] = useState({
    username: user.username as string,
    email: user.email,
  })
  const handleUsernameChange = (e) =>
    setVals({ ...vals, username: e.target.value })
  const handleEmailChange = (e) => setVals({ ...vals, email: e.target.value })

  return (
    <Container>
      <EditableField
        label='Username'
        isEditing={editingField === 'username'}
        value={vals.username}
        onChange={handleUsernameChange}
        onCancel={() => {
          setVals({ ...vals, username: user.username as string })
          setEditingField(null)
        }}
        onStartEdit={() => setEditingField('username')}
        disabled
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
        disabled
      />
      {editingField && <UpdateButton>Update</UpdateButton>}
    </Container>
  )
}
