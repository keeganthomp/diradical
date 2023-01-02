import styled from 'styled-components'
import React, { useEffect } from 'react'
import useMagicWallet from 'hooks/useWallet'
import { useRouter } from 'next/router'
import walletState from 'atoms/wallet'
import { useRecoilState } from 'recoil'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function AuthCallback() {
  const [wallet, setWallet] = useRecoilState(walletState)
  const router = useRouter()
  const { getRedirectResult, fetchWalletBalance } = useMagicWallet()

  useEffect(() => {
    let mounted = true

    const getUserFromCreds = async () => {
      if (mounted) {
        setWallet({
          ...wallet,
          isAuthenticating: true,
        })
      }
      const response = await getRedirectResult()
      if (response) {
        const { userMetadata, idToken: didToken } = response.magic
        localStorage.setItem('didToken', didToken)
        const balance = await fetchWalletBalance(userMetadata.publicAddress)
        if (mounted) {
          setWallet({
            ...wallet,
            walletAddress: userMetadata.publicAddress,
            balance,
            isAuthenticating: false,
          })
        }
        router.push('/listen')
      } else {
        if (mounted) {
          setWallet({
            ...wallet,
            isAuthenticating: false,
          })
        }
      }
    }

    if (router.query.magic_credential && mounted) {
      getUserFromCreds()
    }
    return () => {
      mounted = false
    }
  }, [router.query.magic_credential])

  return (
    <Container>
      {wallet.isAuthenticating ? (
        <>
          <Loader color='#000' />
          <p>Getting user info...</p>
        </>
      ) : null}
    </Container>
  )
}
