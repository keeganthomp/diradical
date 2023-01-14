import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import authOptions from 'pages/api/auth/[...nextauth]'
import type { PrismaClient, Prisma, User } from '@prisma/client'
import type { Adapter, AdapterAccount } from 'next-auth/adapters'
import { generateFromEmail } from 'unique-username-generator'
import stripe from './stripe'
import prisma from './prisma'

export const checkIfAuthenticated = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const session: any = await unstable_getServerSession(req, res, authOptions)
    if (!session || !session?.user?.email) {
      throw new Error('unauthorized')
    }
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })
    if (!user) {
      throw new Error('unauthorized')
    }
    return user
  } catch {
    throw new Error('unauthorized')
  }
}

export function PrismaAdapter(p: PrismaClient): Adapter {
  return {
    createUser: async (data: User) => {
      const { email } = data
      const customer = await stripe.createStripeCustomer({ email })
      const payload = {
        ...data,
        stripeCustomerId: customer.id,
        username: generateFromEmail(email, 4),
      }
      const user = await p.user.create({ data: payload })
      const account = await stripe.creteStripeAccount({
        email,
        userId: user.id,
      })
      return prisma.user.update({
        where: { id: user.id },
        data: { stripeAccountId: account.id },
      })
    },
    getUser: (id) => p.user.findUnique({ where: { id } }),
    getUserByEmail: (email) => p.user.findUnique({ where: { email } }),
    async getUserByAccount(provider_providerAccountId) {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      })
      return account?.user ?? null
    },
    updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),
    deleteUser: (id) => p.user.delete({ where: { id } }),
    linkAccount: (data) =>
      p.account.create({ data }) as unknown as AdapterAccount,
    unlinkAccount: (provider_providerAccountId) =>
      p.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount,
    async getSessionAndUser(sessionToken) {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      })
      if (!userAndSession) return null
      const { user, ...session } = userAndSession
      return { user, session }
    },
    createSession: (data) => p.session.create({ data }),
    updateSession: (data) =>
      p.session.update({ where: { sessionToken: data.sessionToken }, data }),
    deleteSession: (sessionToken) =>
      p.session.delete({ where: { sessionToken } }),
    async createVerificationToken(data) {
      const verificationToken = await p.verificationToken.create({ data })
      if (verificationToken.id) delete verificationToken.id
      return verificationToken
    },
    async useVerificationToken(identifier_token) {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token },
        })
        if (verificationToken.id) delete verificationToken.id
        return verificationToken
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as Prisma.PrismaClientKnownRequestError).code === 'P2025')
          return null
        throw error
      }
    },
  }
}
