import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      try {
        const { audioIPFSCid, coverArtIPFSCid, wallet, title, songId } =
          req.body
        if (!audioIPFSCid || !coverArtIPFSCid || !title || !wallet || !songId) {
          res.status(400).send({ message: 'Missing required fields' })
          return
        }
        const existingUser = await prisma.user.findFirst({
          where: { wallet },
        })
        if (!existingUser) {
          res.status(400).send({ message: 'wallet does not exist' })
          return
        }
        const track = await prisma.track.create({
          data: {
            id: songId,
            title: title,
            audio: audioIPFSCid,
            coverArt: coverArtIPFSCid,
            artist: {
              connect: {
                wallet: wallet,
              },
            },
          },
        })
        res.status(200).json(track)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only POST requests allowed' })
      break
    }
  }
}
