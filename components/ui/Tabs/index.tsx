import styled from 'styled-components'
import { Tab as TabType } from 'types'
import { useState } from 'react'
import Tab from './Tab'

const Container = styled.div`
  width: 100%;
`

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 0 1rem;
  }
`

const ContentContainer = styled.div``

type Props = {
  tabs: TabType[]
}

export default function Tabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(0)

  const Content = tabs[activeTab].Component

  return (
    <Container>
      <TabsWrapper>
        {tabs.map((tab: TabType, i: number) => (
          <Tab
            active={activeTab === i}
            setActiveTab={setActiveTab}
            index={i}
            key={tab.title}
            {...tab}
          />
        ))}
      </TabsWrapper>
      <ContentContainer>
        <Content />
      </ContentContainer>
    </Container>
  )
}
