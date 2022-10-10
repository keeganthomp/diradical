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
  }
`

type Props = {
  user: User
  wallet: string
}

const Wallet = styled.p`
  color: #b8b8b8;
`

export default function UserSettings({ user, wallet }: Props) {
  const [isEditing, setEditingField] = useState(null)
  const [vals, setVals] = useState({
    username: user.username || '',
    email: user.email,
  })

  const onEdit = () => setEditingField(true)
  const handleUsernameChange = (e) =>
    setVals({ ...vals, username: e.target.value })
  const handleEmailChange = (e) => setVals({ ...vals, email: e.target.value })

  return (
    <Container>
      <EditableField
        value={vals.username}
        onChange={handleUsernameChange}
        onCancel={() => {
          setVals({ ...vals, username: user.username })
          setEditingField(false)
        }}
        onStartEdit={onEdit}
      />
      <EditableField
        value={vals.email}
        onChange={handleEmailChange}
        onCancel={() => {
          setVals({ ...vals, email: user.email })
          setEditingField(false)
        }}
        onStartEdit={onEdit}
      />
      <Wallet>{wallet}</Wallet>
      {isEditing && <Button>Update</Button>}
    </Container>
  )
}
