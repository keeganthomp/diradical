import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        const trackId = req.query.trackId as string
        const track = await prisma.track.findUnique({
          where: { id: trackId },
          include: {
            artist: {
              select: { wallet: true },
            },
            votes: true,
          },
        })
        res.status(200).json(track)
      } catch {
        res.status(500).json({ message: 'unable to archive track' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
    }
  }
}
