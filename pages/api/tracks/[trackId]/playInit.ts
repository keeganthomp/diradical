import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'
import { EventType } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      try {
        const user = await checkIfAuthenticated(req, res)
        const trackId = req.query.trackId as string
        const trackToListen = await prisma.track.findUnique({
          where: { id: trackId },
          include: {
            artist: {
              select: {
                id: true,
              },
            },
          },
        })
        if (!trackToListen) {
          res.status(401).json({ message: 'track does not exist' })
          return
        }
        if (trackToListen.artist.id === user.id) {
          res.status(401).json({ message: 'cannot track listen for own track' })
          return
        }
        const currentSeason = await prisma.season.findFirst({
          orderBy: {
            id: 'desc',
          },
        })
        let seasonId = currentSeason?.id
        if (!seasonId) {
          const newSeason = await prisma.season.create({
            data: {},
          })
          seasonId = newSeason.id
        }
        const existingPlayInitEvent = await prisma.event.findFirst({
          where: {
            type: EventType.PLAY_INITIATED,
            user: { id: user.id },
          },
          orderBy: {
            id: 'desc',
          },
        })
        if (
          existingPlayInitEvent &&
          existingPlayInitEvent.trackId !== trackId
        ) {
          await prisma.event.update({
            where: { id: existingPlayInitEvent.id },
            data: {
              createdAt: new Date(),
              track: { connect: { id: trackId } },
            },
          })
        } else {
          await prisma.event.create({
            data: {
              type: EventType.PLAY_INITIATED,
              track: { connect: { id: trackId } },
              season: { connect: { id: seasonId } },
              user: { connect: { id: user.id } },
            },
          })
        }
        res.status(200).json({ success: true })
      } catch (err) {
        res
          .status(500)
          .json({ message: err.message || 'unable to add play event' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only POST requests allowed' })
    }
  }
}
