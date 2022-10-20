import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'
import { Track } from '@prisma/client'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { user: authedUser } = getSession(req, res)
    const { title, source, coverArt }: Partial<Track> = req.body
    try {
      const track = await prisma.track.create({
        data: {
          title,
          coverArt,
          source,
          artist: {
            connect: {
              email: authedUser.email,
            },
          },
        },
      })
      res.status(200).json({ track })
    } catch (err) {
      res.status(500).json({ message: 'unable to upload track' })
    }
  },
)
