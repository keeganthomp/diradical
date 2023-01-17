import styled from 'styled-components'
import profileState, { Tab as TabType } from 'atoms/profile'
import { useRecoilState } from 'recoil'
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
    justify-content: space-between;
  }
`

export default function ProfileTabs() {
  const [{ activeTab }, setProfile] = useRecoilState(profileState)

  const changeTab = (tab: TabType) => {
    setProfile((prev) => ({ ...prev, activeTab: tab }))
  }

  return (
    <TabWrapper>
      <Tab
        isActive={activeTab === 'tracks'}
        handleClick={() => changeTab('tracks')}
      >
        Tracks
      </Tab>
      <Tab
        isActive={activeTab === 'payoutsToReceive'}
        handleClick={() => changeTab('payoutsToReceive')}
      >
        Payouts (Receive)
      </Tab>
      <Tab
        isActive={activeTab === 'payoutsSent'}
        handleClick={() => changeTab('payoutsSent')}
      >
        Payouts (Send)
      </Tab>
    </TabWrapper>
  )
}
