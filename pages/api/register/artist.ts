import { NextApiRequest, NextApiResponse } from 'next'
import stripe from 'lib/stripe'
import { checkIfAuthenticated } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'only POST requests allowed' })
    return
  }
  try {
    const user = await checkIfAuthenticated(req, res)
    if (user.isArtist) {
      res
        .status(500)
        .json({ message: 'user is already registered as an artist' })
      return
    }
    if (!user.stripeAccountId) {
      res.status(500).json({ message: 'artist has no Stripe account' })
      return
    }
    const accountLink = await stripe.connectStripeAccount({
      stripeAccountId: user.stripeAccountId,
    })
    return res.status(200).json(accountLink)
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || 'unable to register as an artist' })
  }
}
