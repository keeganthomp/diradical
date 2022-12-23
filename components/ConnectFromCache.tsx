import useMagicWallet from 'hooks/useWallet'
import React from 'react'

export default function ConnectFromCache() {
  const { connectFromCache, walletAddress } = useMagicWallet()

  React.useEffect(() => {
    let mounted = true
    if (mounted && !walletAddress) {
      connectFromCache()
    }
    return () => {
      mounted = false
    }
  }, [])

  return null
}
