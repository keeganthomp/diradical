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
        const tracks = await prisma.track.findMany({
          where: { archived: false },
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
        const formattedTracks = tracks.map((track) => {
          const { _count, ...rest } = track
          return { ...rest, plays: track._count.events }
        })
        res.status(200).json(formattedTracks)
      } catch (err) {
        res.status(500).json({ message: 'unable to fetch tracks' })
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
          const { audioFile, coverArtFile } = files
          const { title } = fields
          if (!audioFile[0] || !coverArtFile[0] || !title[0]) {
            res.status(400).send({ message: 'Missing required fields' })
          }
          const audioFileObj = audioFile[0].toJSON()
          const coverArtFileObj = coverArtFile[0].toJSON()
          // get file buffer for do spaces
          const audioBuffer = await readFile(audioFileObj.filepath)
          const coverArtBuffer = await readFile(coverArtFileObj.filepath)
          // upload audio file to do spaces
          const folder = `tracks/${title[0]}_${new Date().getTime()}`
          const audioUrl = await doSpaces.uploadFile({
            folder,
            file: audioBuffer,
            fileName: audioFileObj.originalFilename,
          })
          // upload cover art to do spaces
          const coverArtUrl = await doSpaces.uploadFile({
            folder,
            file: coverArtBuffer,
            fileName: coverArtFileObj.originalFilename,
          })
          // save to db
          const track = await prisma.track.create({
            data: {
              title: title[0],
              audio: audioUrl,
              art: coverArtUrl,
              artist: {
                connect: { id: user.id },
              },
            },
          })
          // remove from tmp folder
          await unlink(audioFileObj.filepath)
          await unlink(coverArtFileObj.filepath)
          res.status(200).json(track)
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
