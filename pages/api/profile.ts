import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'
import { getWalletFromMdk } from 'lib/encryption'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=15, stale-while-revalidate=59',
    )
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' })
      return
    }
    try {
      const { user } = getSession(req, res)
      const userWithMusic = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
        select: {
          mdk: true,
          email: true,
          username: true,
          singles: {
            orderBy: {
              createdAt: 'desc', // newest first
            },
          },
          albums: {
            orderBy: {
              createdAt: 'desc', // newest first
            },
          },
        },
      })
      if (!userWithMusic) {
        res.status(400).json({ message: 'user does not exist' })
      }
      const { mdk, ...rest } = userWithMusic
      const wallet = getWalletFromMdk(mdk)
      res.status(200).send({ ...rest, wallet: wallet.addr })
    } catch {
      res.status(500).json({ message: 'unable to upload track' })
    }
  },
)
