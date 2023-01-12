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
        if (!trackToUpdate || trackToUpdate.artistId !== user.id) {
          res.status(401).json({ message: 'unauthorized' })
          return
        }
        await prisma.track.update({
          where: { id: trackId },
          data: {
            archived: !trackToUpdate.archived,
          },
        })
        res.status(200).json({ success: true })
      } catch (err) {
        res
          .status(500)
          .json({ message: err.message || 'unable to archive track' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only POST requests allowed' })
    }
  }
}
