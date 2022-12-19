import styled from 'styled-components'

const StyledButton = styled.button<{ active?: boolean }>`
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border-radius: 30px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 8px 0;
  margin: 3px 0;
  border: none;
  margin-bottom: 10px;
  width: 100%;
  &:hover {
    background: rgba(88, 88, 88, 0.133);
  }
  a {
    color: #000;
    text-decoration: none;
    width: 100%;
    &:visited {
      color: #000;
    }
  }
`

export default function SidebarButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
