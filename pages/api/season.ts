import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { EventType } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        const currentSeason = await prisma.season.findFirst({
          orderBy: {
            id: 'desc',
          },
          select: {
            id: true,
            createdAt: true,
            payouts: true,
            _count: {
              select: {
                events: { where: { type: EventType.PLAY_SAVED } },
                memberships: true,
              },
            },
          },
        })
        res.status(200).json({
          id: currentSeason?.id,
          createdAt: currentSeason?.createdAt,
          plays: currentSeason._count.events,
          memberships: currentSeason._count.memberships,
          payouts: currentSeason.payouts.reduce((acc, cur) => {
            return acc + cur.amount
          }, 0),
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
