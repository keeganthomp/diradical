import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { makeSharesAvailable } from 'contracts'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { percentAvailable, pricePerShare } = req.body
    if (!percentAvailable || !pricePerShare) {
      res.status(400).send({ message: 'Missing required fields' })
    }
    try {
      const fmtPercentAvailable = Number(percentAvailable)
      const fmtPrice = Number(pricePerShare)
      const { user: authedUser } = getSession(req, res)
      const track = await prisma.track.findFirst({
        where: { id: req.query.trackId as string },
        include: {
          artist: {
            select: { mdk: true, email: true },
          },
        },
      })
      if (track.artist.email !== authedUser.email) {
        res.status(401).send({ message: 'Unauthorized' })
      }
      await makeSharesAvailable(
        track.artist.mdk,
        track.contractAddress,
        fmtPercentAvailable,
        fmtPrice,
      )
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ message: 'unable to make shares available' })
    }
  },
)