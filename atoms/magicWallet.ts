import { atom } from 'recoil'

const magicWalletState = atom({
  key: 'magicWallet',
  default: {
    walletAddress: '',
  },
})

export default magicWalletState
