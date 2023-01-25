import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import doSpaces from 'lib/digitalOcean/spaces'
import formidable from 'formidable'
import { readFile, unlink } from 'node:fs/promises'
import { checkIfAuthenticated } from 'lib/auth'
import { EventType } from '@prisma/client'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        const albums = await prisma.album.findMany({
          orderBy: { createdAt: 'asc' },
          select: {
            id: true,
            title: true,
            art: true,
            tracks: {
              where: { archived: false },
              select: {
                id: true,
                title: true,
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
          where: { archived: false, albumId: null },
          orderBy: { createdAt: 'asc' },
          select: {
            id: true,
            title: true,
            art: true,
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
        const visibleAlbums = albums.filter((album) => album.tracks.length > 0)
        const formattedAlbums = visibleAlbums.map((album) => ({
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
        res.status(500).json({ message: err.message })
      }
      break
    }
    case 'POST': {
      const form = formidable()
      form.parse(req, async function (err, fields, files) {
        try {
          const user = await checkIfAuthenticated(req, res)
          if (err) {
            res.status(500).json({ message: 'Unable to parse song files' })
          }
          const { albumCoverArt, trackAudioFiles, trackArtFiles } = files
          const { albumTitle, trackTitles } = fields
          const isAlbum = !!albumCoverArt && !!albumTitle
          let albumId, albumDir
          if (isAlbum) {
            const folder = 'albums'
            const albumTitleFmt = albumTitle[0]
            const fileName = `${albumTitleFmt}_${new Date().getTime()}`
            albumDir = `${folder}/${fileName}`
            const albumArtFileObj = albumCoverArt[0].toJSON()
            // convert album art to buffer to DO
            const albumArtBuffer = await readFile(albumArtFileObj.filepath)
            const albumArtUrl = await doSpaces.uploadFile({
              folder: albumDir,
              file: albumArtBuffer,
              fileName: albumArtFileObj.originalFilename,
            })
            const album = await prisma.album.create({
              data: {
                title: albumTitleFmt,
                art: albumArtUrl,
                artist: { connect: { id: user.id } },
              },
            })
            albumId = album.id
            await unlink(albumArtFileObj.filepath)
          }
          const songsPayload = []
          for (const [index, trackTitle] of trackTitles.entries()) {
            const folder = isAlbum ? albumDir : 'tracks'
            const fileName = `${trackTitle}_${new Date().getTime()}`
            const dir = `${folder}/${fileName}`
            const audioFileObj = trackAudioFiles[index].toJSON()
            // convert files to buffers
            const audioBuffer = await readFile(audioFileObj.filepath)
            // upload audio file to do spaces
            const audioUrl = await doSpaces.uploadFile({
              folder: dir,
              file: audioBuffer,
              fileName: audioFileObj.originalFilename,
            })
            await unlink(audioFileObj.filepath)
            let coverArtUrl
            if (!isAlbum) {
              const coverArtFileObj = trackArtFiles[index].toJSON()
              const coverArtBuffer = await readFile(coverArtFileObj.filepath)
              coverArtUrl = await doSpaces.uploadFile({
                folder: dir,
                file: coverArtBuffer,
                fileName: coverArtFileObj.originalFilename,
              })
              await unlink(coverArtFileObj.filepath)
            }
            songsPayload.push({
              title: trackTitle,
              audio: audioUrl,
              art: coverArtUrl,
              artistId: user.id,
              albumId,
            })
          }
          const tracks = await prisma.track.createMany({
            data: songsPayload,
          })
          res.status(200).json(tracks)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
      })
      break
    }
    default: {
      res.status(405).send({ message: 'Only GET requests allowed' })
      break
    }
  }
}
