import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    res.status(405).send({ message: 'Only PUT requests allowed' })
    return
  }
  const { wallet, membershipExp }: { wallet: string; membershipExp: number } =
    req.body
  if (!wallet || !membershipExp) {
    res.status(500).json({ message: 'missing wallet or membership expiration' })
  }
  try {
    await prisma.user.update({
      where: { wallet },
      data: { membershipExp },
    })
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to register user' })
  }
}
