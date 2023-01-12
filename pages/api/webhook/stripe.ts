import { NextApiRequest, NextApiResponse } from 'next'
import bodyParser from 'body-parser'
import prisma from 'lib/prisma'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const config = {
  api: {
    bodyParser: false,
  },
}

export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Object) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, bodyParser.raw({ type: 'application/json' }))
  const sig = req.headers['stripe-signature']
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    )
    console.log('event type:', event.type)
    switch (event.type) {
      case 'account.external_account.created':
        const stripeAccount = event.data.object
        const { metaData } = stripeAccount
        await prisma.user.update({
          where: {
            id: metaData.userId,
          },
          data: { isArtist: true },
        })
        break
      case 'customer.subscription.created':
        const subscriptionSchedule = event.data.object
        const { customer, id: stripeSubscriptionId } = subscriptionSchedule
        const user = await prisma.user.findUnique({
          where: { stripeCustomerId: customer },
        })
        await prisma.membership.create({
          data: {
            user: { connect: { id: user.id } },
            stripeSubscriptionId,
          },
        })
        break
      default:
        return
    }
    res.send(200)
  } catch (err) {
    res.status(400).send(`Stripe webhook Error: ${err.message}`)
    return
  }
}
