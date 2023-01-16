import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'
import stripe from 'lib/stripe'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  await checkIfAuthenticated(req, res)
  const { userId } = req.query
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
    })
    let payload = {}
    if (!user?.stripeAccountId) {
      payload = {
        ...user,
        balance: 0,
      }
    } else {
      const stripeBalance = await stripe.getUserBalance({
        stripeAccountId: user.stripeAccountId,
      })
      payload = {
        ...user,
        balance: stripeBalance.amount,
      }
    }
    res.status(200).json(payload)
  } catch (err) {
    res.status(500).json({ message: err.message || 'unable to fetch user' })
  }
}
