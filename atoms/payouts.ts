import { atom } from 'recoil'

export type Payout = {
  period: number
  amount: number
  received?: boolean
}

const payoutState = atom({
  key: 'payouts',
  default: null as Payout[],
})

export default payoutState
