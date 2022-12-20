import styled from 'styled-components'

const StyledButton = styled.button<{ active?: boolean }>`
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  border-radius: 30px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 8px;
  border: none;
  padding: 10px 0 10px 8px;
  &:hover {
    background: #f0f0f09d;
  }
`

const Icon = styled.span`
  padding-right: 0.75rem;
`

const Title = styled.span``

export default function SidebarButton({
  children,
  icon,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
  icon: JSX.Element
}) {
  return (
    <StyledButton onClick={onClick}>
      {icon && <Icon>{icon}</Icon>}
      <Title>{children}</Title>
    </StyledButton>
  )
}
