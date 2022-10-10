import { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import prisma from 'lib/prisma'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PUT') {
      res.status(405).send({ message: 'Only PUT requests allowed' })
      return
    }
    try {
      const { user: authedUser } = getSession(req, res)
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
  },
)
