import styled from 'styled-components'

const BaseButton = styled.button`
  background: ${(p) => p.theme.colors.main};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  width: 4rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background: #b8b8b8;
    opacity: 0.3;
    &:hover {
      cursor: not-allowed;
    }
  }
`

export default function Button({ children, ...props }) {
  return <BaseButton {...props}>{children}</BaseButton>
}
