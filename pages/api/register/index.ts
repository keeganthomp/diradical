import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import stripe from 'lib/stripe'
import bcrypt from 'bcrypt'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'only POST requests allowed' })
    return
  }
  if (!req.body) {
    res.status(500).json({ message: 'missing request body' })
    return
  }
  if (!req.body.email || !req.body.username || !req.body.password) {
    res.status(500).json({ message: 'missing required fields' })
    return
  }
  const { username, email, password: plainTextPassword } = req.body
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    })
    if (user) {
      res.status(500).json({ message: 'user already exists' })
      return
    }
    const customer = await stripe.createStripeCustomer({ email })
    const passwordHash = await bcrypt.hash(plainTextPassword, 10)
    // create a new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash,
        stripeCustomerId: customer.id,
      },
    })
    const account = await stripe.creteStripeAccount({
      email,
      userId: newUser.id,
    })
    return res.status(200).json({})
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || 'unable to register as an artist' })
  }
}
