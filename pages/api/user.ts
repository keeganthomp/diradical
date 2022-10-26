import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'
import { getWalletFromMdk } from 'lib/encryption'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { user: authedUser } = getSession(req, res)
    switch (req.method) {
      case 'GET': {
        try {
          const user = await prisma.user.findUnique({
            where: { email: authedUser.email },
          })
          res.status(200).json(user)
        } catch (err) {
          res.status(500).json({ message: 'unable to get user' })
        }
        break
      }
      case 'PUT': {
        try {
          const { username } = req.body
          if (!username || typeof username !== 'string')
            res
              .status(400)
              .json({ message: 'must provide username of type string' })
          await prisma.user.update({
            where: {
              email: authedUser.email,
            },
            data: {
              username,
            },
          })
          res.status(200).json({ sucess: true })
        } catch (err) {
          res.status(500).json({ message: 'unable to update user' })
        }
        break
      }
      default: {
        res.status(405).json({ message: 'only PUT & GET request allowed' })
      }
    }
  },
)
