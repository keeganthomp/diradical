import styled from 'styled-components'

const ActionButton = styled.button`
  background: ${(p) => p.theme.colors.main};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 0.5rem 0;
  transition: opacity 0.1s ease-in-out;
  width: 8rem;
  font-weight: 300;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`

export default ActionButton
