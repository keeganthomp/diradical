import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { EventType } from '@prisma/client'
import stripe from 'lib/stripe'

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
        const membershipCost = await stripe.getMembershipPrice()
        const amtForArtist = membershipCost * 0.5
        for (const user of usersWithPlays) {
          const totalPlays = user.events.length
          const playsPerTrack = user.events.reduce((acc, cur) => {
            if (acc[cur.trackId]) {
              acc[cur.trackId] = {
                ...acc[cur.trackId],
                total: acc[cur.trackId].total + 1,
              }
            } else {
              acc[cur.trackId] = {
                total: 1,
                artistId: cur.track.artist.id,
              }
            }
            return acc
          }, {})
          const trackIds = Object.keys(playsPerTrack)
          for (const trackId of trackIds) {
            const { total, artistId } = playsPerTrack[trackId]
            const percent = total / totalPlays
            await prisma.payout.create({
              data: {
                amount: percent * amtForArtist,
                season: { connect: { id: currentSeason.id } },
                initiator: { connect: { id: user.id } },
                receiver: {
                  connect: { id: artistId },
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
