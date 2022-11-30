import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  const { walletAddress } = req.query
  try {
    const tracks = await prisma.track.findMany({
      where: {
        artist: { wallet: walletAddress as string },
      },
      include: { artist: { select: { wallet: true } }, votes: true },
    })
    res.status(200).json(tracks)
  } catch (err) {
    res.status(500).json({ message: 'unable to fetch tracks' })
  }
}
