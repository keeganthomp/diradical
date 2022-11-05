import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'
import ipfs from 'lib/IPFS'
import { launchSongCtc } from 'contracts'
import axios from 'axios'

type SongPayload = {
  title: string
  audioS3Url: string
  artS3Url: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      const payload: SongPayload = req.body
      if (!payload.title || !payload.audioS3Url || !payload.artS3Url) {
        res.status(400).send({ message: 'Missing required fields' })
      }
      const { user: authedUser } = getSession(req, res)
      if (!authedUser) res.status(401).send({ message: 'Unauthorized' })
      const user = await prisma.user.findFirst({
        where: { email: authedUser.email },
        select: { mdk: true },
      })
      try {
        const { data: artFileContent } = await axios.get(payload.artS3Url, {
          responseType: 'arraybuffer',
        })
        const { data: audioFileContent } = await axios.get(payload.audioS3Url, {
          responseType: 'arraybuffer',
        })
        const artFileBuffer = Buffer.from(artFileContent, 'utf-8')
        const audioFileBuffer = Buffer.from(audioFileContent, 'utf-8')
        const { path: coverArtIpfsHash } = await ipfs.add(artFileBuffer)
        const { path: audioIpfsHash } = await ipfs.add(audioFileBuffer)
        const { contractAddress, tokenId } = await launchSongCtc({
          coverArtIpfsCid: coverArtIpfsHash,
          audioIpfsCid: audioIpfsHash,
          mdk: user.mdk,
        })
        const track = await prisma.track.create({
          data: {
            title: payload.title,
            source: payload.audioS3Url,
            coverArt: payload.artS3Url,
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
        await prisma.token.create({
          data: {
            id: tokenId,
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
          include: { artist: { select: { username: true } } },
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
