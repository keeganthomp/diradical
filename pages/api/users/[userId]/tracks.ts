import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { EventType } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  const { userId } = req.query
  try {
    const userTracks = await prisma.track.findMany({
      where: { artist: { username: userId as string } },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        title: true,
        art: true,
        archived: true,
        artist: {
          select: {
            username: true,
            id: true,
          },
        },
        _count: {
          select: {
            events: { where: { type: EventType.PLAY_SAVED } },
          },
        },
      },
    })
    const formattedTracks = userTracks.map((track) => {
      const { _count, ...rest } = track
      return { ...rest, plays: track._count.events }
    })

    res.status(200).json(formattedTracks)
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || 'unable to fetch user tracks' })
  }
}
