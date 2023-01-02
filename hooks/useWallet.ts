import magicWalletState from 'atoms/wallet'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { polygonNodeOptions } from 'lib/magic'
import { Magic } from 'magic-sdk'
import Web3 from 'web3'

const useMagicWallet = () => {
  const router = useRouter()
  const [walletFromState, setWallet] = useRecoilState(magicWalletState)

  if (typeof window === 'undefined') return {} as any // ensure code is client side

  const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
    network: polygonNodeOptions,
  })
  magic.preload()

  const web3 = new Web3(magic.rpcProvider as any)

  const fetchWalletBalance = async (walletAddr?: string) => {
    const addressToFetch = walletAddr || walletFromState.walletAddress
    if (!addressToFetch) return
    try {
      setWallet({
        ...walletFromState,
        isFetchingBalance: true,
      })
      const balance = await web3.eth.getBalance(addressToFetch)
      setWallet({
        ...walletFromState,
        isFetchingBalance: false,
      })
      return Number(web3.utils.fromWei(balance, 'ether'))
    } catch (error) {
      console.log('error getting user balance', error)
    }
  }

  const connectFromCache = async () => {
    try {
      setWallet({
        ...walletFromState,
        isAuthenticating: true,
      })
      const isLoggedIn = await magic.user.isLoggedIn()
      if (!isLoggedIn) {
        setWallet({
          ...walletFromState,
          isAuthenticating: false,
          walletAddress: '',
        })
        return
      }
      const user = await magic.user.getMetadata()
      const didToken = await magic.user.getIdToken()
      const balance = await fetchWalletBalance(user.publicAddress)
      localStorage.setItem('didToken', didToken)
      setWallet({
        ...walletFromState,
        isAuthenticating: false,
        walletAddress: user.publicAddress,
        balance,
      })
    } catch (error) {
      setWallet({
        ...walletFromState,
        isAuthenticating: false,
      })
      console.log('error logging in from cache', error)
    }
  }

  const authenticate = async ({ email }: { email: string }) => {
    setWallet({
      ...walletFromState,
      isAuthenticating: true,
    })
    try {
      const didToken = await magic.auth.loginWithEmailOTP({
        email,
      })
      const user = await magic.user.getMetadata()
      const balance = await fetchWalletBalance(user.publicAddress)
      localStorage.setItem('didToken', didToken)
      router.push('/listen')
      setWallet({
        ...walletFromState,
        isAuthenticating: false,
        walletAddress: user.publicAddress,
        balance,
      })
    } catch (err) {
      setWallet({
        ...walletFromState,
        isAuthenticating: false,
      })
      console.log('error logging in', err)
    }
  }

  const logout = async () => {
    try {
      setWallet({
        ...walletFromState,
        isAuthenticating: true,
      })
      await magic.user.logout()
      localStorage.clear()
      setWallet({
        ...walletFromState,
        isAuthenticating: false,
        walletAddress: '',
      })
      router.push('/authenticate')
    } catch (error) {
      setWallet({
        ...walletFromState,
        isAuthenticating: false,
      })
      console.log('error logging out', error)
    }
  }

  return {
    authenticate,
    logout,
    connectFromCache,
    isLoggedIn: !!walletFromState.walletAddress,
    walletAddress: walletFromState.walletAddress,
    isAuthenticating: walletFromState.isAuthenticating,
    isFetchingBalance: walletFromState.isFetchingBalance,
    balance: walletFromState.balance,
  }
}

export default useMagicWallet
