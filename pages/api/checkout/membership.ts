import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]'
import stripe from 'lib/stripe'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const session: any = await unstable_getServerSession(req, res, authOptions)
  if (!session || !session?.user?.email) {
    res.status(401).json({ message: 'unauthorized' })
    return
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })
    if (!user) {
      res
        .status(500)
        .json({ message: `${session.user.email} is not registered` })
      return
    }
    const checkoutSession = await stripe.createMembershipCheckoutSession({
      stripeCustomerId: user.stripeCustomerId,
    })
    res.status(200).json(checkoutSession)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to create checkout session' })
  }
}
