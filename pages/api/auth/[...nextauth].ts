import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import GoogleProvider from 'next-auth/providers/google'
import stripe from 'lib/stripe'
import prisma from 'lib/prisma'
import { generateFromEmail } from 'unique-username-generator'

export default NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin/error', // Error code passed in query string as ?error=
  },
  callbacks: {
    async signIn({ account, profile }) {
      switch (account.provider) {
        case 'google': {
          const { email } = profile
          const existingUser = await prisma.user.findUnique({
            where: { email },
          })
          if (!existingUser) {
            const customer = await stripe.createStripeCustomer({ email })
            await prisma.user.create({
              data: {
                username: generateFromEmail(email, 3), // random username
                email,
                stripeCustomerId: customer.id,
              },
            })
          }
          return true
        }
        case 'github': {
          return true
        }
        case 'apple': {
          return true
        }
        default:
          return true
      }
    },
    async session({ session }) {
      const { membership, ...user } = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
          membership: true,
        },
      })
      let hasActiveMembership = false
      if (membership) {
        const { stripeSubscriptionId } = membership
        try {
          const isMembershipActive = await stripe.checkIfMembershipActive(
            stripeSubscriptionId,
          )
          hasActiveMembership = isMembershipActive
        } catch (e) {
          console.log(e)
        }
      }
      return {
        ...session,
        user: {
          ...user,
          hasActiveMembership,
        },
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
})
