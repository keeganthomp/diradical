import { atom } from 'recoil'

const walletState = atom({
  key: 'wallet',
  default: {
    walletAddress: '',
    isAuthenticating: false,
    balance: 0,
    isFetchingBalance: false,
  },
})

export default walletState
