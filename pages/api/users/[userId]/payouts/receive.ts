import { NextApiRequest, NextApiResponse } from 'next'
import stripe from 'lib/stripe'
import { checkIfAuthenticated } from 'lib/auth'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = req.query.userId as string
  try {
    switch (req.method) {
      case 'GET': {
        const user = await prisma.user.findUnique({
          where: {
            id: userId as string,
          },
        })
        const payload = { balance: 0 }
        if (!user?.stripeAccountId) {
          payload.balance = 0
        } else {
          const stripeBalance = await stripe.getUserBalance({
            stripeAccountId: user.stripeAccountId,
          })
          payload.balance = stripeBalance.amount
        }
        res.status(200).json(payload)
        break
      }
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
        const payout = await stripe.payoutUser({
          stripeAccountId: authedUser.stripeAccountId,
        })
        res.status(200).json({ sucess: true })
        break
      }
      default: {
        res.status(405).send({ message: 'Only GET and POST requests allowed' })
        break
      }
    }
  } catch (err) {
    console.log('errrr', err)
    res.status(500).json({ message: err.message || 'unable to payout user' })
  }
}