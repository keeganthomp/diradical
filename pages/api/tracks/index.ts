import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

type SongPayload = {
  title: string
  audioS3Url: string
  artS3Url: string
  songId: number
  wallet: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      const payload: SongPayload = req.body
      if (!payload.title || !payload.audioS3Url || !payload.artS3Url) {
        res.status(400).send({ message: 'Missing required fields' })
      }
      const existingUser = await prisma.user.findFirst({
        where: { wallet: payload.wallet },
      })
      if (!existingUser) {
        res.status(400).send({ message: 'wallet does not exist' })
        return
      }
      try {
        const track = await prisma.track.create({
          data: {
            title: payload.title,
            source: payload.audioS3Url,
            coverArt: payload.artS3Url,
            songId: payload.songId,
            artist: {
              connect: {
                wallet: payload.wallet,
              },
            },
          },
        })
        res.status(200).json({ track })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break
    }
    case 'GET': {
      try {
        const tracks = await prisma.track.findMany({
          where: { archived: false },
          include: { artist: { select: { wallet: true } }, votes: true },
        })
        res.status(200).json(tracks)
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch tracks' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only POST & GET requests allowed' })
      break
    }
  }
}
