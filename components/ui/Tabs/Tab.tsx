import styled from 'styled-components'
import { Tab as TabType } from 'types'

type TitleProps = {
  active?: boolean
}

const TabContainer = styled.div`
  cursor: pointer;
`

const TabTitle = styled.p<TitleProps>`
  color: white;
  border-bottom: ${(p) => (p.active ? '2px solid white' : 'none')};
`

export default function Tab({
  index,
  title,
  active,
  setActiveTab,
}: TabType & { index: number; setActiveTab: (tabIndex: number) => void }) {
  const handleTabClick = () => setActiveTab(index)
  return (
    <TabContainer>
      <TabTitle onClick={handleTabClick} active={active}>
        {title}
      </TabTitle>
    </TabContainer>
  )
}
