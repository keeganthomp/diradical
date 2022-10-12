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
  text-decoration: ${(p) => (p.active ? 'underline' : 'none')};
  text-transform: lowercase;
  font-weight: 200;
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
