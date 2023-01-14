import profileState, { Tab } from 'atoms/profile'
import { useRecoilState } from 'recoil'
import useUser from './useUser'
import useSWR from 'swr'

export default function useProfile() {
  const { user: sessionUser } = useUser()
  const { data: userFromDb } = useSWR(
    sessionUser ? `/api/users/${sessionUser.id}` : null,
  )
  const [profile, setProfile] = useRecoilState(profileState)

  const changeTab = (tab: Tab) => {
    setProfile({ ...profile, activeTab: tab })
  }

  return { changeTab, activeTab: profile.activeTab, account: userFromDb }
}
