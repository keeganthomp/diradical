import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { purchaseOwnership } from 'contracts'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { tokenAmtToPurchase } = req.body
    if (!tokenAmtToPurchase) {
      res.status(400).send({ message: 'Missing required fields' })
    }
    try {
      const fmtTokenAmtToPurchase = Number(tokenAmtToPurchase)
      const track = await prisma.track.findFirst({
        where: { id: req.query.trackId as string },
        include: {
          artist: {
            select: { mdk: true },
          },
        },
      })
      await purchaseOwnership({
        mdk: track.artist.mdk,
        ctcAddress: track.contractAddress,
        amtOfTokensToPurchase: fmtTokenAmtToPurchase,
      })
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
)
