import { NextApiRequest, NextApiResponse } from 'next'
import stripe from 'lib/stripe'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'only POST requests allowed' })
    return
  }
  try {
    const platformBalance = await stripe.getPlatformBalance()
    const userBalance = await stripe.getUserBalance({
      stripeAccountId: 'acct_1MMLPfCRY7MUGXdp',
    })
    await stripe.payoutUser({ stripeAccountId: 'acct_1MMLPfCRY7MUGXdp' })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: 'unable to payout user' })
  }
}
