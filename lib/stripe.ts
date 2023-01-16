const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const BASE_APP_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://dierad.xyz'
    : 'http://localhost:3000'

const MEMBERSHIP_PRICE_ID = 'price_1MMMJGCErQVeq5sByBb1m1jC'
const DAYS_OF_FREE_TRIAL = 0

// create stripe customer for purchasing subscriptions and items on the platform
const createStripeCustomer = async ({ email }: { email: string }) =>
  stripe.customers.create({
    email,
  })

// create Stripe account for user
// a Stripe account is required to setup Stripe Connect account
const creteStripeAccount = async ({
  email,
  userId,
}: {
  email: string
  userId: string
}) => {
  try {
    const account = await stripe.accounts.create({
      type: 'express',
      email,
      metadata: {
        userId,
      },
    })
    return account
  } catch (stripeError) {
    throw new Error(stripeError)
  }
}

// create onboarding link for user to setup Stripe Connect account (name, bank info, etc.)
const connectStripeAccount = async ({
  stripeAccountId,
}: {
  stripeAccountId: string
}) => {
  try {
    // get onboarding link to create bank info for account to receive funds
    // returns a URL to redirect to on the fontend - Stripe onboarding form
    return stripe.accountLinks.create({
      account: stripeAccountId,
      refresh_url: `${BASE_APP_URL}/`,
      return_url: `${BASE_APP_URL}/registration/success`,
      type: 'account_onboarding',
    })
  } catch (stripeError) {
    throw new Error(stripeError)
  }
}

// fetch user's stripe account
const getStripeAccount = async ({
  stripeAccountId,
}: {
  stripeAccountId: string
}) => stripe.accounts.retrieve(stripeAccountId)

// create checkout session for purchasing membership
// includes url for frontend to redirect to in order to complete purchase
const createMembershipCheckoutSession = async ({
  stripeCustomerId,
}: {
  stripeCustomerId: string
}) =>
  await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer: stripeCustomerId,
    line_items: [
      {
        price: MEMBERSHIP_PRICE_ID,
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_period_days: DAYS_OF_FREE_TRIAL,
    },

    success_url: `${BASE_APP_URL}/membership/success`,
    cancel_url: `${BASE_APP_URL}`,
  })

// send funds from Stripe's platform balance to user's Stripe account balance
const transferFundsToUser = async ({
  stripeAccountId,
  amount,
  transferGroup,
}: {
  stripeAccountId: string
  amount: number
  transferGroup?: string
}) => {
  try {
    const platformBalance = await getPlatformBalance()
    if (amount > platformBalance.amount) {
      throw new Error('Not enough funds for transfer')
    }
    await stripe.transfers.create({
      amount,
      currency: 'usd',
      destination: stripeAccountId,
      transfer_group: transferGroup || 'dierad_transfer',
    })
  } catch (stripeError) {
    throw new Error(stripeError)
  }
}

// send funds from user's Stipe account to their bank account
const payoutUser = async ({
  stripeAccountId,
  amount,
}: {
  stripeAccountId: string
  amount?: number
}) => {
  try {
    const userBalance = await getUserBalance({ stripeAccountId })
    const amountToSend = amount || userBalance.amount
    if (amountToSend === 0) {
      throw new Error('No funds to payout')
    }
    if (amountToSend > userBalance.amount) {
      throw new Error('Not enough funds for payout')
    }
    // pyout user in Stripe
    const payout = await stripe.payouts.create(
      {
        amount: amountToSend,
        currency: 'usd',
      },
      { stripeAccount: stripeAccountId },
    )
    return payout
  } catch (stripeError) {
    throw new Error(stripeError)
  }
}

// get Stripe platform balance
const getPlatformBalance = async () => {
  try {
    const { available: availableBalance } = await stripe.balance.retrieve()
    return availableBalance[0]
  } catch (err) {
    throw new Error(err)
  }
}

// get user's Stripe account balance
const getUserBalance = async ({
  stripeAccountId,
}: {
  stripeAccountId: string
}) => {
  try {
    const { available: availableBalance } = await stripe.balance.retrieve({
      stripeAccount: stripeAccountId,
    })
    return availableBalance[0]
  } catch (stripeError) {
    throw new Error(stripeError)
  }
}

// check if membership is active
const checkIfMembershipActive = async (subscriptionId: string) => {
  try {
    if (!subscriptionId) return false
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    if (!subscription?.plan) return false
    const { plan } = subscription
    return plan.id === MEMBERSHIP_PRICE_ID && plan.active
  } catch (stripeError) {
    throw new Error(stripeError)
  }
}

export default {
  getStripeAccount,
  creteStripeAccount,
  connectStripeAccount,
  createStripeCustomer,
  createMembershipCheckoutSession,
  transferFundsToUser,
  payoutUser,
  getPlatformBalance,
  getUserBalance,
  checkIfMembershipActive,
}
