import { User } from '@prisma/client'
import React from 'react'
import axios from 'axios'

const useWalletBalance = (user: User) => {
  const [bal, setBal] = React.useState(null as number)
  React.useEffect(() => {
    if (!user) return
    const getBal = async () => {
      try {
        const { data } = await axios.get(
          `https://algoindexer.testnet.algoexplorerapi.io/v2/accounts/${user.walletAddress}`,
        )
        setBal(data.account.amount)
      } catch {
        // the balance wallet balance be 0
        setBal(0)
      }
    }
    getBal()
  }, [user])
  return { isLoading: bal === null, balance: bal }
}

export default useWalletBalance
