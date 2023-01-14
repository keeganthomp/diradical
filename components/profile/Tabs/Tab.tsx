import styled from 'styled-components'

const TabContainer = styled.div<{ isActive: boolean }>`
  border-bottom: ${(p) =>
    p.isActive ? '2px solid #000' : '2px solid transparent'};
  &:hover {
    cursor: pointer;
  }
`

export default function Tab({
  children,
  handleClick,
  isActive,
}: {
  children: React.ReactNode
  handleClick: () => void
  isActive?: boolean
}) {
  return (
    <TabContainer isActive={isActive} onClick={handleClick}>
      {children}
    </TabContainer>
  )
}
