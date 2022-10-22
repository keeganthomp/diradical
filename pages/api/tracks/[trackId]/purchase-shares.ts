import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { purschaseShares } from 'contracts'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { sharesToPurchase } = req.body
    if (!sharesToPurchase) {
      res.status(400).send({ message: 'Missing required fields' })
    }
    try {
      const fmtSharesToPurchase = Number(sharesToPurchase)
      const track = await prisma.track.findFirst({
        where: { id: req.query.trackId as string },
        include: {
          artist: {
            select: { mdk: true },
          },
        },
      })
      await purschaseShares(
        track.artist.mdk,
        track.contractAddress,
        fmtSharesToPurchase,
      )
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ message: 'unable to purchase shares' })
    }
  },
)
