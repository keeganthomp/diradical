import { atom } from 'recoil'

const magicWalletState = atom({
  key: 'magicWallet',
  default: {
    walletAddress: '',
    isAuthenticating: false,
  },
})

export default magicWalletState
