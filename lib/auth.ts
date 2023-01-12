import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import authOptions from 'pages/api/auth/[...nextauth]'
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
