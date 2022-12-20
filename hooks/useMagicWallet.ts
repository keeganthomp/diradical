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

  const connectFromCache = async () => {
    setMagicWallet({
      ...magicWallet,
      isAuthenticating: true,
    })
    try {
      const wallet = await magicMatic.connect.getWalletInfo()
      await authenticate()
    } catch (error) {
      console.log('error checking if user is logged in', error)
      setMagicWallet({
        ...magicWallet,
        isAuthenticating: false,
      })
    }
  }

  const authenticate = async () => {
    try {
      setMagicWallet({
        ...magicWallet,
        isAuthenticating: true,
      })
      const accounts = await maticWeb3.eth.getAccounts()
      setMagicWallet({
        isAuthenticating: false,
        walletAddress: accounts[0],
      })
    } catch (err) {
      setMagicWallet({
        ...magicWallet,
        isAuthenticating: false,
      })
      console.log('Error authenticating with magic:', err)
    }
  }

  const logout = async () => {
    try {
      await magicMatic.connect.disconnect()
      setMagicWallet({
        walletAddress: '',
        isAuthenticating: false,
      })
      console.log('Logged out!')
    } catch (error) {
      console.log('error logging out', error)
    }
  }

  return {
    authenticate,
    logout,
    isLoggedIn: !!magicWallet.walletAddress,
    isInitializing: false,
    walletAddress: magicWallet.walletAddress,
    web3: maticWeb3,
    isAuthenticating: magicWallet.isAuthenticating,
    showWallet,
    connectFromCache,
  }
}

export default useMagicWallet
