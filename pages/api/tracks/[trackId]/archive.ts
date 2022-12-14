import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      try {
        const trackId = Number(req.query.trackId)
        const track = await prisma.track.findFirst({
          where: { id: trackId },
          include: {
            artist: {
              select: { wallet: true },
            },
          },
        })
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
}
