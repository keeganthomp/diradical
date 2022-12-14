import { Magic } from 'magic-sdk'
import Web3 from 'web3'
import { ConnectExtension } from '@magic-ext/connect'
import magicWalletState from 'atoms/magicWallet'
import { useRecoilState } from 'recoil'
import { useState } from 'react'

/**
 * Configure Polygon Connection
 */
const polygonNodeOptions = {
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  chainId: 80001,
}

const useMagicWallet = () => {
  const [isAuthenticating, setAuthenticating] = useState(false)
  if (typeof window === 'undefined') return { isInitializing: true } // ensure code is client side

  const [magicWallet, setMagicWallet] = useRecoilState(magicWalletState)

  const magicMatic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
    network: polygonNodeOptions,
    locale: 'en_US',
    extensions: [new ConnectExtension()],
  })

  const rpcProvider = magicMatic.rpcProvider
  const maticWeb3 = new Web3(rpcProvider as any)

  maticWeb3.currentProvider

  const showWallet = async () => {
    // TODO: check if wallet type is 'magic'
    try {
      await magicMatic.connect.showWallet()
    } catch (error) {
      console.log('error showing wallet', error)
    }
  }

  const authenticate = async () => {
    try {
      setAuthenticating(true)
      const accounts = await maticWeb3.eth.getAccounts()
      setMagicWallet({
        walletAddress: accounts[0],
      })
      setAuthenticating(false)
    } catch (err) {
      setAuthenticating(false)
      console.log('Error authenticating with magic:', err)
    }
  }

  const logout = async () => {
    try {
      await magicMatic.connect.disconnect()
      setMagicWallet({
        walletAddress: '',
      })
      console.log('Logged out!')
    } catch (error) {
      console.log('error logging out', error)
    }
  }

  const getToken = async () => {
    try {
      const didToken = await magicMatic.user.getIdToken()
      return didToken
    } catch (error) {
      console.log('error getting token', error)
    }
  }

  return {
    authenticate,
    logout,
    getToken,
    isLoggedIn: !!magicWallet.walletAddress,
    isInitializing: false,
    walletAddress: magicWallet.walletAddress,
    web3: maticWeb3,
    isAuthenticating,
    showWallet,
  }
}

export default useMagicWallet
