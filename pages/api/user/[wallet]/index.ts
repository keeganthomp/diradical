import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  const { wallet } = req.query
  try {
    const user = await prisma.user.findUnique({
      where: {
        wallet: wallet as string,
      },
      include: {
        castedVotes: true,
      },
    })
    res.status(200).json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to register user' })
  }
}
