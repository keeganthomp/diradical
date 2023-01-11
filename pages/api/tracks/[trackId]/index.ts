import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        const trackId = req.query.trackId as string
        const track = await prisma.track.findUnique({
          where: { id: trackId },
          select: {
            audio: true,
          },
        })
        res.status(200).json(track)
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch tracks' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
