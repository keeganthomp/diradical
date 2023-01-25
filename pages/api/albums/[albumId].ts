import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { EventType } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        const albumId = req.query.albumId as string
        const album = await prisma.album.findUnique({
          where: { id: albumId },
          select: {
            id: true,
            title: true,
            art: true,
            tracks: {
              where: { archived: false },
              select: {
                id: true,
                title: true,
                audio: true,
                _count: {
                  select: {
                    events: { where: { type: EventType.PLAY_SAVED } },
                  },
                },
              },
            },
            artist: {
              select: {
                username: true,
                id: true,
              },
            },
          },
        })
        const formattedTracks = album.tracks.map((track) => {
          const { _count, ...rest } = track
          return {
            ...rest,
            plays: track._count.events,
            artist: album.artist,
            art: album.art,
          }
        })
        res.status(200).json({
          ...album,
          tracks: formattedTracks,
        })
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch albums' })
      }
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
