import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { checkIfAuthed } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  await checkIfAuthed(req, res)
  const {
    voterWallet,
    artist,
    period,
  }: { voterWallet: string; artist: string; period: number } = req.body

  if (!voterWallet || !artist || !period) {
    res.status(500).json({ message: 'missing wallet or songId' })
  }
  try {
    await prisma.vote.create({
      data: {
        period: period,
        voter: { connect: { wallet: voterWallet } },
        artist: { connect: { wallet: artist } },
      },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to vote' })
  }
}
