import { atom } from 'recoil'

const walletState = atom({
  key: 'wallet',
  default: {
    walletAddress: '',
    isAuthenticating: false,
    balance: 0 as number | string,
    isFetchingBalance: false,
  },
})

export default walletState
