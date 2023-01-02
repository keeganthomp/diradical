import magicWalletState from 'atoms/wallet'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { polygonNodeOptions } from 'lib/magic'
import { Magic } from 'magic-sdk'
import Web3 from 'web3'
import { formatCurrency } from 'utils'
import { OAuthExtension } from '@magic-ext/oauth'

const useMagicWallet = () => {
  const router = useRouter()
  const [walletFromState, setWallet] = useRecoilState(magicWalletState)

  if (typeof window === 'undefined') return {} as any // ensure code is client side

  const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
    network: polygonNodeOptions,
    extensions: [new OAuthExtension()],
  })
  magic.preload()

  const loginWithGithub = async () => {
    try {
      setWallet({
        ...walletFromState,
        isAuthenticating: true,
      })
      await magic.oauth.loginWithRedirect({
        provider: 'github',
        redirectURI: `${window.location.origin}/listen`,
      })
    } catch (error) {
      console.log('error logging in with github', error)
    }
  }

  const loginWithGoogle = async () => {
    try {
      setWallet({
        ...walletFromState,
        isAuthenticating: true,
      })
      await magic.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: `${window.location.origin}/listen`,
      })
    } catch (error) {
      console.log('error logging in with google', error)
    }
  }

  const getRedirectResult = async () => {
    try {
      const result = await magic.oauth.getRedirectResult()
      return result
    } catch (error) {
      console.log('error getting redirect result', error)
    }
  }

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
      const fmtBalance = formatCurrency(balance)
      return fmtBalance
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
      router.push('/authenticate')
      await magic.user.logout()
      localStorage.clear()
      setWallet({
        ...walletFromState,
        balance: 0,
        isAuthenticating: false,
        walletAddress: '',
      })
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
    loginWithGithub,
    loginWithGoogle,
    getRedirectResult,
    isLoggedIn: !!walletFromState.walletAddress,
    walletAddress: walletFromState.walletAddress,
    isAuthenticating: walletFromState.isAuthenticating,
    isFetchingBalance: walletFromState.isFetchingBalance,
    balance: walletFromState.balance,
  }
}

export default useMagicWallet
