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
  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET,
  )
  try {
    console.log('event type:', event.type)
    switch (event.type) {
      case 'account.external_account.created':
        const stripeAccount = event.data.object
        const { metadata } = stripeAccount
        await prisma.user.update({
          where: {
            id: metadata.userId,
          },
          data: { isArtist: true },
        })
        res.status(200).send(`Handled event: ${event.type}.`)
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
        res.status(200).send(`Handled event: ${event.type}.`)
        break
      default:
        res.status(200).send(`Unhandled event type: ${event.type}!`)
        return
    }
  } catch (err) {
    res
      .status(400)
      .send(`Stripe webhook error during event ${event.type}: ${err.message}`)
    return
  }
}
