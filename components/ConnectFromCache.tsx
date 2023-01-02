import useMagicWallet from 'hooks/useWallet'
import React from 'react'
import { useRouter } from 'next/router'

export default function ConnectFromCache() {
  const { connectFromCache, walletAddress } = useMagicWallet()
  const router = useRouter()

  const pathName = router.pathname
  const isAuthCallback = pathName === '/authenticate/callback'

  React.useEffect(() => {
    let mounted = true
    if (mounted && !walletAddress && !isAuthCallback) {
      connectFromCache()
    }
    return () => {
      mounted = false
    }
  }, [])

  return null
}
