import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import authOptions from 'pages/api/auth/[...nextauth]'
import prisma from './prisma'

export const checkIfAuthenticated = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
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
    return user
  } catch {
    res.status(401).json({ message: 'unauthorized' })
    return
  }
}
