import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'
import { Track } from '@prisma/client'
import formidable from 'formidable'
import ipfs from 'lib/IPFS'
import fs from 'fs'
import { launchSongCtc } from 'contracts'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const fileBuffers = {
      audio: null as Buffer | null,
      converArt: null as Buffer | null,
    }
    const payload: Partial<Track> = {
      audioIpfsHash: '',
      coverArtIpfsHash: '',
      title: '',
      source: '',
      coverArt: '',
    }
    const form = new formidable.IncomingForm()
    form
      .on('error', () => {
        res.status(500).json({ message: 'unable to upload track' })
      })
      .on('field', (field, value) => {
        payload[field] = value
      })
      .on('file', async (field: 'audioFile' | 'artFile', value) => {
        const bufferKey = field === 'audioFile' ? 'audio' : 'converArt'
        const file = value
        fileBuffers[bufferKey] = fs.readFileSync(file.filepath)
      })
      .on('end', async () => {
        const { user: authedUser } = getSession(req, res)
        if (!fileBuffers.audio || !fileBuffers.converArt) {
          res.status(500).json({ message: 'unable to upload track' })
        }
        const user = await prisma.user.findUnique({
          where: {
            email: authedUser.email,
          },
          select: {
            mdk: true,
          },
        })
        const { path: audioIpfsHash } = await ipfs.add(fileBuffers.audio)
        const { path: coverArtIpfsHash } = await ipfs.add(fileBuffers.converArt)
        const contractAddress = await launchSongCtc(
          user.mdk,
          audioIpfsHash,
          coverArtIpfsHash,
        )
        const { title, source, coverArt } = payload
        try {
          const track = await prisma.track.create({
            data: {
              title,
              source,
              coverArt,
              audioIpfsHash,
              coverArtIpfsHash,
              contractAddress,
              artist: {
                connect: {
                  email: authedUser.email,
                },
              },
            },
          })
          res.status(200).json({ track })
        } catch (err) {
          console.log(err)
          res.status(500).json({ message: 'unable to upload track' })
        }
      })

    form.parse(req)
  },
)
