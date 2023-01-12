import { NextApiRequest, NextApiResponse } from 'next'
import stripe from 'lib/stripe'
import { checkIfAuthenticated } from 'lib/auth'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'only POST requests allowed' })
    return
  }
  try {
    const existingUser = await checkIfAuthenticated(req, res)
    if (existingUser.isArtist) {
      res
        .status(500)
        .json({ message: 'user is already registered as an artist' })
      return
    }
    let stripeAccountId = existingUser?.stripeAccountId
    if (!existingUser.stripeAccountId) {
      const account = await stripe.creteStripeAccount({
        userId: existingUser.id,
        email: existingUser.email,
      })
      await prisma.user.update({
        where: { id: existingUser.id },
        data: { stripeAccountId: account.id },
      })
      stripeAccountId = account.id
    }
    const accountLink = await stripe.connectStripeAccount({
      stripeAccountId,
    })
    return res.status(200).json(accountLink)
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || 'unable to register as an artist' })
  }
}
