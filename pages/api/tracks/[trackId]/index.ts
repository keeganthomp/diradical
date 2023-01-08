import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        await checkIfAuthenticated(req, res)
        const trackId = req.query.trackId as string
        const track = await prisma.track.findUnique({
          where: { id: trackId },
          include: {
            artist: true,
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
