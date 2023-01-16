import NextAuth from 'next-auth'
import prisma from 'lib/prisma'
import { PrismaAdapter } from 'lib/auth'
import stripe from 'lib/stripe'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        username: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const { username: usernameOrEmail, password: plainTextPassword } =
          credentials
        const user = await prisma.user.findFirst({
          where: {
            OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
          },
        })
        if (!user) {
          throw new Error('No user found')
        }
        const isValidPassword = await bcrypt.compare(
          plainTextPassword,
          user.password,
        )
        return isValidPassword ? user : null
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin/error', // Error code passed in query string as ?error=
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        let hasActiveMembership = false
        const userMembership = await prisma.membership.findUnique({
          where: { userId: user.id },
        })
        if (userMembership) {
          hasActiveMembership = await stripe.checkIfMembershipActive(
            userMembership.stripeSubscriptionId,
          )
        }
        token.id = user.id
        token.email = user.email
        token.image = user.image
        //  custom fields on jwt to expose to session
        token.username = user.username
        token.isArtist = user.isArtist
        token.hasActiveMembership = hasActiveMembership
      }
      return token
    },
    session: async ({ session, token }) => {
      let hasActiveMembership = (token.hasActiveMembership as boolean) || false
      let isArtist = (token.isArtist as boolean) || false
      const userId = token.id as string
      if (userId) {
        // need to check for active user membership each re-validation
        if (!hasActiveMembership) {
          const userMembership = await prisma.membership.findUnique({
            where: { userId },
          })
          if (userMembership) {
            hasActiveMembership = await stripe.checkIfMembershipActive(
              userMembership.stripeSubscriptionId,
            )
          }
        }
        if (!isArtist) {
          const user = await prisma.user.findUnique({
            where: { id: userId },
          })
          isArtist = user.isArtist
        }
        return {
          ...session,
          user: {
            ...session.user,
            // custom fields to expose to client
            id: token.id as string,
            username: token.username as string,
            isArtist,
            hasActiveMembership,
          },
        }
      }
      return session
    },
    redirect: async ({ url, baseUrl }) => {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
})
