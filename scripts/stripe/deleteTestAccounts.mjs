import dotenv from 'dotenv'
import Stripe from 'stripe'

dotenv.config()

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

console.log('fetching accounts...')
const { data: accounts } = await stripe.accounts.list({ limit: 100 })
const accountIds = accounts.map(({ id }) => id)

console.log('deleting accounts...')
for (const accountId of accountIds) {
  await stripe.accounts.del(accountId)
  console.log(`deleted account ${accountId}`)
}

console.log('Finsihed deleting accounts')