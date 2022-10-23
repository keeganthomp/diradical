import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { openToPublic } from 'contracts'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { amtToRetain, totalValue } = req.body
    if (!amtToRetain || !totalValue) {
      res.status(400).send({ message: 'Missing required fields' })
    }
    try {
      const fmtAmtToRetain = Number(amtToRetain)
      const fmtTotalValue = Number(totalValue)
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
      await openToPublic({
        mdk: track.artist.mdk,
        ctcAddress: track.contractAddress,
        amtOfTokensToRetain: fmtAmtToRetain,
        totalValue: fmtTotalValue,
      })
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
)
