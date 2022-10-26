import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { generateWalletMdk } from 'lib/encryption'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, username } = req.body
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  if (!email || !username) {
    res.status(500).json({ message: 'email & username are required' })
  }
  try {
    const { mdk, walletAddress } = generateWalletMdk()
    await prisma.user.create({
      data: {
        username,
        email,
        mdk,
        walletAddress,
      },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log('err', err)
    res.status(500).json({ message: 'unable to register user' })
  }
}
