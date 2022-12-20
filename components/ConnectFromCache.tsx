import useMagicWallet from 'hooks/useMagicWallet'
import React from 'react'

export default function ConnectFromCache() {
  const { connectFromCache } = useMagicWallet()

  React.useEffect(() => {
    connectFromCache()
  }, [])

  return null
}
