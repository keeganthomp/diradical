import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'
import { EventType } from '@prisma/client'
import { getDistributionForUser } from 'lib/payouts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  await checkIfAuthenticated(req, res)
  const { userId } = req.query
  try {
    const currentSeason = await prisma.season.findFirst({
      orderBy: {
        id: 'desc',
      },
    })
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
      include: {
        events: {
          where: {
            type: EventType.PLAY_SAVED,
            seasonId: currentSeason.id,
          },
          include: {
            track: {
              select: {
                id: true,
                title: true,
                art: true,
                archived: true,
                artist: {
                  select: {
                    username: true,
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    const userWithoutPass = { ...user, password: undefined }
    const payoutDistribution = await getDistributionForUser(userWithoutPass)
    res.status(200).json(payoutDistribution)
  } catch (err) {
    res.status(500).json({ message: err.message || 'unable to fetch user' })
  }
}
