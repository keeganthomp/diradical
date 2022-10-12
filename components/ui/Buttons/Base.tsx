import styled from 'styled-components'

const StyledButton = styled.button`
  background: white;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  width: 4rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
