import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' })
      return
    }
    const { user: authedUser } = getSession(req, res)
    try {
      const userTracks = await prisma.track.findMany({
        where: { artist: { email: authedUser.email } },
        include: { artist: { select: { username: true } } },
      })
      res.status(200).json(userTracks)
    } catch (err) {
      res.status(500).json({ message: 'unable to get user tracks' })
    }
  },
)
