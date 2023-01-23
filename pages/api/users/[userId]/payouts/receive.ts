import { NextApiRequest, NextApiResponse } from 'next'
import stripe from 'lib/stripe'
import { checkIfAuthenticated } from 'lib/auth'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = req.query.userId as string
  try {
    switch (req.method) {
      case 'POST': {
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
          res
            .status(401)
            .json({ message: 'user is not registered as an artist' })
          return
        }
        await stripe.payoutUser({
          stripeAccountId: authedUser.stripeAccountId,
        })
        res.status(200).json({ sucess: true })
        break
      }
      default: {
        res.status(405).send({ message: 'Only POST requests allowed' })
        break
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'unable to payout user' })
  }
}
