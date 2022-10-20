import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { generateWalletMdk } from 'lib/encryption'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  if (!email) {
    res.status(500).json({ message: 'email is required' })
  }
  try {
    const mdk = generateWalletMdk()
    await prisma.user.create({
      data: {
        email,
        mdk,
      },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log('err', err)
    res.status(500).json({ message: 'unable to register user' })
  }
}