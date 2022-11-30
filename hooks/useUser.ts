import { useRecoilValue } from 'recoil'
import reachAccountState from 'atoms/reachAccount'
import useSWR from 'swr'
import { User } from '@prisma/client'

export default function useUser() {
  const reachAcc = useRecoilValue(reachAccountState)
  const { data: user, error } = useSWR<User>(
    reachAcc ? `/api/user/${reachAcc.networkAccount.address}` : null,
  )

  return { user, isFetching: !user && !error }
}
