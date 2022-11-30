import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const VOTING_PERIOD = 1
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { wallet, trackId }: { wallet: string; trackId: string } = req.body
  if (!wallet || !trackId) {
    res.status(500).json({ message: 'missing wallet or songId' })
  }
  try {
    await prisma.vote.create({
      data: {
        period: VOTING_PERIOD,
        user: { connect: { wallet } },
        track: { connect: { id: trackId } },
      },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to vote' })
  }
}
