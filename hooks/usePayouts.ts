import React from 'react'
import useContract from 'hooks/useContract'
import useMagicWallet from 'hooks/useMagicWallet'

export type Payout = {
  period: number
  amount: number
}

export default function usePayouts() {
  const { walletAddress, isLoggedIn } = useMagicWallet()
  const ctc = useContract()
  const [payouts, setPayouts] = React.useState<Payout[] | null>(null)

  React.useEffect(() => {
    const getSongInfoFromCtc = async () => {
      const currentPeriod = await ctc.votingPeriod
      const arr = [...Array(currentPeriod - 1).keys()].map((_, i) =>
        ctc.getSongInfo(walletAddress, i + 1),
      )
      const pms = await Promise.all(arr)
      const totalPayouts = pms.reduce((acc, cur, i) => {
        const period: Payout = {
          period: i + 1,
          amount: cur?.payout || 0,
        }
        acc.push(period)
        return acc
      }, [])
      setPayouts(totalPayouts)
    }
    if (isLoggedIn && ctc?.votingPeriod) getSongInfoFromCtc()
  }, [isLoggedIn])

  const receivePayouts = async (votingPeriod: number) => {
    if (votingPeriod >= ctc.votingPeriod) throw new Error('Period is not over')
    await ctc.receivePayout(votingPeriod)
  }

  return { payouts, receivePayouts }
}
