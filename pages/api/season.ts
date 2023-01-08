import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const currentSeason = await prisma.season.findFirst({
        where: { current: true },
      })
      const plays = await prisma.playEvent.findMany({
        where: { seasonId: currentSeason?.id },
      })
      try {
        res.status(200).json({
          id: currentSeason?.id,
          playCount: plays.length,
        })
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch season' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
