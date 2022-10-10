import TextInput from './TextInput'
import styled from 'styled-components'
import { useState } from 'react'
import { BiPencil } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'

type Props = {
  value: string
  onChange: (e: any) => void
  onCancel: (e?: any) => void
  onStartEdit?: (e?: any) => void
}

const EditIcon = styled(BiPencil)`
  position: relative;
  top: 1px;
  color: #868686;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  margin-left: 0.25rem;
  &:hover {
    color: #000000;
  }
`

const CancelEditIcon = styled(IoIosCloseCircleOutline)`
  position: relative;
  top: 1px;
  color: #868686;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  margin-left: 0.25rem;
  &:hover {
    color: #000000;
  }
`

const Field = styled.div`
  display: flex;
  align-items: center;
`

export default function EditableField({
  value,
  onChange,
  onCancel,
  onStartEdit,
}: Props) {
  const [editing, setEditing] = useState(false)

  const handleCancel = () => {
    onCancel()
    setEditing(false)
  }

  const handleEdit = () => {
    onStartEdit()
    setEditing(true)
  }

  return (
    <Field>
      {editing ? (
        <TextInput onChange={onChange} value={value} />
      ) : (
        <p>{value}</p>
      )}
      {editing ? (
        <CancelEditIcon onClick={handleCancel} />
      ) : (
        <EditIcon onClick={handleEdit} />
      )}
    </Field>
  )
}
