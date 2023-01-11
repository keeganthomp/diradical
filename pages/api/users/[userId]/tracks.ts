import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthenticated } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  const { userId } = req.query
  try {
    await checkIfAuthenticated(req, res)
    const tracks = await prisma.track.findMany({
      where: {
        artist: { username: userId as string },
      },
      include: {
        artist: true,
      },
    })
    res.status(200).json(tracks)
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || 'unable to fetch user tracks' })
  }
}
