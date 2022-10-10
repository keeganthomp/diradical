import { NextApiRequest, NextApiResponse } from 'next'
import S3 from 'lib/aws/s3'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
      res.status(405).send({ message: 'Only GET requests allowed' })
      return
    }
    try {
      const { user: authedUser } = getSession(req, res)
      const { fileName, folder } = req.query
      const key = S3.createKey({
        fileName: fileName as string,
        folder: folder as string,
        user: authedUser.sid,
      })
      const url = await S3.generatePresignedUrl({ key })
      res.status(200).json({ url })
    } catch (err) {
      res.status(500).json({ message: 'unable to get presigned URL' })
    }
  },
)
