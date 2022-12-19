import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  const { wallet } = req.query
  try {
    const payoutsReceived = await prisma.payout.findMany({
      where: {
        receiver: { wallet: wallet as string },
      },
    })
    res.status(200).json(payoutsReceived)
  } catch (err) {
    res.status(500).json({ message: 'unable to fetch tracks' })
  }
}
