import TextInput from './TextInput'
import styled from 'styled-components'
import { BiPencil } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'

type Props = {
  value: string
  onChange: (e: any) => void
  onCancel: (e?: any) => void
  onStartEdit?: (e?: any) => void
  isEditing: boolean
}

const EditIcon = styled(BiPencil)`
  position: relative;
  top: 1px;
  color: #868686;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  margin-left: 0.25rem;
  &:hover {
    color: white;
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
    color: white;
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
  isEditing,
}: Props) {
  const handleCancel = () => {
    onCancel()
  }

  const handleEdit = () => {
    onStartEdit()
  }

  return (
    <Field>
      {isEditing ? (
        <TextInput onChange={onChange} value={value} />
      ) : (
        <p>{value}</p>
      )}
      {isEditing ? (
        <CancelEditIcon onClick={handleCancel} />
      ) : (
        <EditIcon onClick={handleEdit} />
      )}
    </Field>
  )
}
