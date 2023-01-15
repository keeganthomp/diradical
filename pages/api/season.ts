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
    case 'POST': {
      try {
        const currentSeason = await prisma.season.findFirst({
          orderBy: {
            id: 'desc',
          },
        })
        const plays = await prisma.event.findMany({
          where: {
            type: EventType.PLAY_SAVED,
            seasonId: currentSeason.id,
          },
          include: {
            track: {
              include: {
                artist: {
                  select: {
                    id: true,
                    stripeAccountId: true,
                  },
                },
              },
            },
          },
        })
        // map for easily referencing artist to their user id and stripe account id
        const artistMap: Record<
          string,
          { stripeAccountId: string; userId: string }
        > = {}
        // map of plays per track grouped by user
        /**
         * i.e. {
         *  'user1': {
         *   'track-1-id': 2,
         *   'track-2-id': 5,
         *   'total': 7
         *  }
         * },
         */
        const playsPerUser: Record<
          string,
          Record<string, number>
        > = plays.reduce((acc, play) => {
          if (!artistMap[play.track.id]) {
            artistMap[play.track.id] = {
              stripeAccountId: play.track.artist.stripeAccountId,
              userId: play.track.artist.id,
            }
          }
          if (acc[play.userId]) {
            if (acc[play.userId][play.trackId]) {
              acc[play.userId][play.trackId] += 1
            } else {
              acc[play.userId][play.trackId]
              acc[play.userId][play.trackId] = 1
            }
            if (acc[play.userId].total) {
              acc[play.userId].total += 1
            } else {
              acc[play.userId].total = 1
            }
          } else {
            acc[play.userId] = { [play.trackId]: 1, total: 1 }
          }
          return acc
        }, {})
        // map of percent of plays per track grouped by user derived the number of plays per track
        /**
         * i.e. {
         *  'user1': {
         *   'track-1-id': 0.5, // 50% of plays
         *   'track-2-id': 0.5, // 50% of plays
         *  }
         * },
         */
        const percentPerUser: Record<
          string,
          Record<string, number>
        > = Object.keys(playsPerUser).reduce((acc, userId) => {
          const userPlays = playsPerUser[userId]
          const userTotal = userPlays.total
          const userPercent = Object.keys(userPlays).reduce((acc, trackId) => {
            if (trackId !== 'total') {
              acc[trackId] = userPlays[trackId] / userTotal
            }
            return acc
          }, {})
          acc[userId] = userPercent
          return acc
        }, {})

        // initiate payouts based on the information above
        // To be determined on how much of the monthly membership will be kept for profit
        const AMT_TO_DISTRIBUTE = 10000
        const userIds = Object.keys(percentPerUser)
        for (const userId of userIds) {
          const userPercents = percentPerUser[userId]
          const trackIds = Object.keys(userPercents)
          for (const trackId of trackIds) {
            const percent = userPercents[trackId]
            await prisma.payout.create({
              data: {
                amount: percent * AMT_TO_DISTRIBUTE,
                season: { connect: { id: currentSeason.id } },
                initiator: { connect: { id: userId } },
                receiver: {
                  connect: { id: artistMap[trackId].userId },
                },
              },
            })
          }
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
