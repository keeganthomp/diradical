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
    const { title, genre, source, coverArt }: Partial<Track> = req.body
    try {
      const { id: userId } = await prisma.user.findUnique({
        where: {
          email: authedUser.email,
        },
      })
      const track = await prisma.track.create({
        data: {
          title,
          coverArt,
          source,
          artist: {
            connect: {
              id: userId,
            },
          },
        },
      })
      res.status(200).json({ track })
    } catch (err) {
      console.log('err', err)
      res.status(500).json({ message: 'unable to upload track' })
    }
  },
)
