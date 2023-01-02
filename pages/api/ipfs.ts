import { NextApiRequest, NextApiResponse } from 'next'
import ipfs from 'lib/IPFS'
import formidable from 'formidable'
import { readFile, unlink } from 'node:fs/promises'
import { checkIfAuthed } from 'lib/auth'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      await checkIfAuthed(req, res)
      const form = formidable()
      form.parse(req, async function (err, fields, files) {
        const { audioFile, coverArtFile } = files
        if (!audioFile[0] || !coverArtFile[0]) {
          res.status(400).send({ message: 'Missing required fields' })
        }
        try {
          const audioFileObj = audioFile[0].toJSON()
          const coverArtFileObj = coverArtFile[0].toJSON()
          // get file buffer for IPFS
          const audioBuffer = await readFile(audioFileObj.filepath)
          const coverArtBuffer = await readFile(coverArtFileObj.filepath)
          // upload to IPFS
          const { path: audioIPFSCid } = await ipfs.add(audioBuffer)
          const { path: coverArtIPFSCid } = await ipfs.add(coverArtBuffer)
          // remove from tmp folder
          await unlink(audioFileObj.filepath)
          await unlink(coverArtFileObj.filepath)
          res.status(200).json({
            audioIPFSCid,
            coverArtIPFSCid,
          })
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
      })
      break
    }
    default: {
      res.status(405).send({ message: 'Only POST requests allowed' })
      break
    }
  }
}
