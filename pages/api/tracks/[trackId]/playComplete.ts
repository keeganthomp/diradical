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
        const userPlayInitEvent = await prisma.event.findFirst({
          where: {
            user: { id: user.id },
            type: EventType.PLAY_INITIATED,
          },
          include: {
            season: true,
          },
          orderBy: {
            id: 'desc',
          },
        })
        if (!userPlayInitEvent) {
          res.status(401).json({ message: 'no play initiated event found' })
          return
        }
        if (userPlayInitEvent.trackId !== trackId) {
          res
            .status(401)
            .json({ message: 'track does not match play initiated event' })
          return
        }
        // ensure 30 seconds passed since play initiated
        const playInitiatedAt = new Date(userPlayInitEvent.createdAt)
        const now = new Date()
        const timeDiff = now.getTime() - playInitiatedAt.getTime()
        const secondsDiff = timeDiff / 1000
        if (secondsDiff < 30) {
          res.status(401).json({ message: 'not valid listen time' })
          return
        }
        await prisma.event.create({
          data: {
            type: EventType.PLAY_SAVED,
            track: { connect: { id: trackId } },
            season: { connect: { id: userPlayInitEvent.seasonId } },
            user: { connect: { id: user.id } },
          },
        })
        await prisma.event.delete({
          where: { id: userPlayInitEvent.id },
        })
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
