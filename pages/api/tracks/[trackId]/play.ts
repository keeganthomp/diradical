import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      try {
        const user = await checkIfAuthenticated(req, res)
        const trackId = req.query.trackId as string
        const trackToUpdate = await prisma.track.findUnique({
          where: { id: trackId },
        })
        const currentSeason = await prisma.season.findFirst({
          where: { current: true },
        })
        let seasonId = currentSeason?.id
        if (!currentSeason) {
          const newSeason = await prisma.season.create({
            data: {
              current: true,
            },
          })
          seasonId = newSeason.id
        }
        if (!trackToUpdate) {
          res.status(401).json({ message: 'track does not exist' })
          return
        }
        await prisma.playEvent.create({
          data: {
            track: { connect: { id: trackId } },
            season: { connect: { id: seasonId } },
            user: { connect: { id: user.id } },
          },
        })
        res.status(200).json({ success: true })
      } catch (err) {
        console.log('err', err)
        res.status(500).json({ message: 'unable to add play event' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only POST requests allowed' })
    }
  }
}
