import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case 'POST': {
        try {
          const { user: authedUser } = getSession(req, res)
          const trackId = req.query.trackId as string
          const track = await prisma.track.findFirst({
            where: { id: trackId },
            include: {
              artist: {
                select: { email: true },
              },
            },
          })
          if (track.artist.email !== authedUser.email) {
            res.status(401).json({ message: 'Unauthorized' })
          }
          await prisma.track.update({
            where: { id: trackId },
            data: {
              archived: !track.archived,
            },
          })
          res.status(200).json({ success: true })
        } catch {
          res.status(500).json({ message: 'unable to archive track' })
        }
        break
      }
      default: {
        res.status(405).send({ message: 'Only POST requests allowed' })
      }
    }
  },
)
