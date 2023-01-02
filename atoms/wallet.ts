import { atom } from 'recoil'

const walletState = atom({
  key: 'wallet',
  default: {
    walletAddress: '',
    isAuthenticating: false,
    balance: null as null | number,
    isFetchingBalance: false,
  },
})

export default walletState
