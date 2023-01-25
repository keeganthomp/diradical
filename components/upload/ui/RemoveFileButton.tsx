import { IoIosCloseCircle } from 'react-icons/io'
import styled from 'styled-components'

const RemoveFileButton = styled(IoIosCloseCircle)<{ disabled?: boolean }>`
  width: 16px;
  position: absolute;
  top: 7px;
  right: 0;
  color: ${(p) => (p.disabled ? '#d0d0d0' : 'red')};
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
    opacity: 1;
  }
`

export default RemoveFileButton
