import { NextApiRequest, NextApiResponse } from 'next'
import ipfs from 'lib/IPFS'
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
        res
          .status(200)
          .json({ artIPFSHash: coverArtIpfsHash, audioIPFSHash: audioIpfsHash })
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
