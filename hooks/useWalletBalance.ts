import { User } from '@prisma/client'
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const useWalletBalance = () => {
  const [balance, setBal] = React.useState(null as number)
  const { isLoading: isFetchingUser, data: user } = useQuery<User>(
    'user',
    () => fetch(`/api/user`).then((res) => res.json()),
    {
      refetchInterval: 30000,
    },
  )
  React.useEffect(() => {
    if (!user) return
    const getBal = async () => {
      try {
        const { data } = await axios.get(
          `https://algoindexer.testnet.algoexplorerapi.io/v2/accounts/${user.walletAddress}`,
        )
        setBal(data.account.amount)
      } catch {
        // the balance wallet balance be 0 on error as the wallet will not exist on Algorand
        setBal(0)
      }
    }
    getBal()
  }, [user])
  return { isFetching: balance === null || isFetchingUser, balance }
}

export default useWalletBalance
