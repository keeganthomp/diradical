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
    const albums = await prisma.album.findMany({
      where: { artist: { username: userId as string } },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        title: true,
        art: true,
        tracks: {
          select: {
            id: true,
            title: true,
            archived: true,
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
    const singles = await prisma.track.findMany({
      where: {
        albumId: null,
        artist: { username: userId as string },
      },
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
    const formattedSingles = singles.map((track) => {
      const { _count, ...rest } = track
      return { ...rest, plays: track._count.events }
    })
    const formattedAlbums = albums.map((album) => ({
      ...album,
      tracks: album.tracks.map((track) => {
        const { _count, ...rest } = track
        const plays = track._count.events
        return {
          ...rest,
          art: album.art,
          artist: album.artist,
          plays,
        }
      }),
    }))
    res.status(200).json({
      singles: formattedSingles,
      albums: formattedAlbums,
    })
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || 'unable to fetch user tracks' })
  }
}
