import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthed } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      // await checkIfAuthed(req, res)
      try {
        const tracks = await prisma.track.findMany({
          where: { archived: false },
          include: { artist: { select: { wallet: true } } },
        })
        res.status(200).json(tracks)
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch tracks' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
