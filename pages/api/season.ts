import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { EventType } from '@prisma/client'
import stripe from 'lib/stripe'
import { getDistributionForUser } from 'lib/payouts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      const { SEASON_CRON_JOB_SECRET } = process.env
      const ACTION_KEY = req.headers.authorization.split(' ')[1]
      const isAuthed = ACTION_KEY === SEASON_CRON_JOB_SECRET
      if (!isAuthed) {
        res.status(401).json({ message: 'unauthorized' })
        return
      }
      try {
        const currentSeason = await prisma.season.findFirst({
          orderBy: {
            id: 'desc',
          },
        })
        const usersWithPlays = await prisma.user.findMany({
          include: {
            events: {
              where: {
                type: EventType.PLAY_SAVED,
                seasonId: currentSeason.id,
              },
              include: {
                track: {
                  include: {
                    artist: true,
                  },
                },
              },
            },
          },
        })
        const usersWithoutPass = usersWithPlays.map((user) => {
          return { ...user, password: undefined }
        })
        const usersDistribution = []
        for (const user of usersWithoutPass) {
          const payoutDistribution = await getDistributionForUser(user)
          usersDistribution.push({
            user,
            distibution: payoutDistribution,
          })
        }
        // end current season
        await prisma.season.update({
          where: { id: currentSeason.id },
          data: {
            endedAt: new Date(),
          },
        })
        //start new season
        await prisma.season.create({
          data: {},
        })
        res.status(200).json({ message: 'new season started' })
      } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'unable to end season' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
