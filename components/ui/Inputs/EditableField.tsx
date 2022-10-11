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
  label: string
}

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Icon = styled.div`
  position: absolute;
  right: -1.5rem;
  top: 3px;
`

const EditIcon = styled(BiPencil)`
  position: relative;
  top: 1px;
  color: #868686;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  margin-left: 0.25rem;
  font-size: 1.25rem;
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
  font-size: 1.25rem;
  &:hover {
    color: white;
  }
`

const Label = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`

const FieldInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const FieldValue = styled.p`
  margin: 0;
  width: 100%;
  font-weight: 200;
`

export default function EditableField({
  value,
  onChange,
  onCancel,
  onStartEdit,
  isEditing,
  label,
}: Props) {
  const handleCancel = () => {
    onCancel()
  }

  const handleEdit = () => {
    onStartEdit()
  }

  return (
    <Field>
      <Label>{label}</Label>
      <FieldInput>
        {isEditing ? (
          <TextInput onChange={onChange} value={value} />
        ) : (
          <FieldValue>{value}</FieldValue>
        )}
        <Icon>
          {isEditing ? (
            <CancelEditIcon onClick={handleCancel} />
          ) : (
            <EditIcon onClick={handleEdit} />
          )}
        </Icon>
      </FieldInput>
    </Field>
  )
}
