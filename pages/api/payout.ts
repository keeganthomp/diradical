import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const {
    wallet,
    amount,
    period,
  }: { wallet: string; amount: number; period: number } = req.body
  if (!wallet || !amount || !period || isNaN(amount) || isNaN(period)) {
    res.status(500).json({ message: 'missing required fields' })
  }
  if (isNaN(amount) || isNaN(period)) {
    res.status(500).json({ message: 'amount and period must be numbers' })
  }
  try {
    await prisma.payout.create({
      data: {
        period,
        amount: amount.toString(),
        receiver: { connect: { wallet } },
      },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to add payout' })
  }
}
