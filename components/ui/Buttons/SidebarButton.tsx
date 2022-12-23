import styled from 'styled-components'
import Loader from '../Loader'

const StyledButton = styled.button<{ active?: boolean; isLoading?: boolean }>`
  background: transparent;
  display: flex;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  align-items: center;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
  border-radius: 30px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 8px;
  border: none;
  padding: 10px 0 10px 8px;
  color: #000;
  &:hover {
    background: #f0f0f09d;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
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
  disabled,
  isLoading,
}: {
  children: React.ReactNode
  onClick: () => void
  icon: JSX.Element
  disabled?: boolean
  isLoading?: boolean
}) {
  return (
    <StyledButton
      isLoading={isLoading}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader color='#000' size={20} />
      ) : (
        <>
          {icon && <Icon>{icon}</Icon>}
          <Title>{children}</Title>
        </>
      )}
    </StyledButton>
  )
}
