import styled from 'styled-components'
import useProfile from 'hooks/useProfile'
import { devices } from 'styles/theme'
import Tab from './Tab'

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20rem;
  justify-content: space-between;
  padding-bottom: 2rem;
  @media ${devices.mobile} {
    width: 100%;
    justify-content: space-around;
  }
`

export default function ProfileTabs() {
  const { changeTab, activeTab } = useProfile()
  return (
    <TabWrapper>
      <Tab
        isActive={activeTab === 'tracks'}
        handleClick={() => changeTab('tracks')}
      >
        Tracks
      </Tab>
      <Tab
        isActive={activeTab === 'payouts'}
        handleClick={() => changeTab('payouts')}
      >
        Payouts
      </Tab>
    </TabWrapper>
  )
}
