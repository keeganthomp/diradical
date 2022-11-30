import stdlib from 'lib/reach'
import { useRecoilState } from 'recoil'
import reachAccountState from 'atoms/reachAccount'
import api from 'lib/api'

export default function useReachAccount() {
  const [reachAcc, setReachAccount] = useRecoilState(reachAccountState)
  const connectWallet = async () => {
    const acc = await stdlib.getDefaultAccount()
    const address = acc.networkAccount.address
    await api.register(address)
    const fmtAcc = {
      ...acc,
      networkAccount: {
        address,
      },
    }
    setReachAccount(fmtAcc)
    return acc
  }

  return { reachAcc, connectWallet }
}
