import { NextApiRequest, NextApiResponse } from 'next'
import stripe from 'lib/stripe'
import { checkIfAuthenticated } from 'lib/auth'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'only POST requests allowed' })
    return
  }
  const userId = req.query.userId as string
  try {
    const authedUser = await checkIfAuthenticated(req, res)
    const userToPayout = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!userToPayout) {
      res.status(404).json({ message: 'user does not exist' })
      return
    }
    if (authedUser.id !== userId) {
      res.status(401).json({ message: 'unauthorized' })
      return
    }
    if (authedUser.stripeAccountId === null) {
      res.status(401).json({ message: 'user is not registered as an artist' })
      return
    }
    // TODO: check if there is enough money to payout to user
    const platformBalance = await stripe.getPlatformBalance()
    const userBalance = await stripe.getUserBalance({
      stripeAccountId: authedUser.stripeAccountId,
    })
    const payout = await stripe.payoutUser({
      stripeAccountId: authedUser.stripeAccountId,
    })
    // store payout info database
    await prisma.payout.create({
      data: {
        amount: payout.amount,
        stripePayoutId: payout.id,
        user: {
          connect: {
            stripeAccountId: authedUser.stripeAccountId,
          },
        },
      },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log('errrr', err)
    res.status(500).json({ message: err.message || 'unable to payout user' })
  }
}
