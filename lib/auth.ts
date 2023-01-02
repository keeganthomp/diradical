import type { NextApiRequest, NextApiResponse } from 'next'
import { magicAdmin } from 'lib/magic'

export const checkIfAuthed = async (
  request: NextApiRequest,
  res: NextApiResponse,
) => {
  const { headers } = request
  const authorizationHeader = headers.authorization as string
  if (!authorizationHeader) {
    res.status(401).json({ message: 'unauthorized' })
    return
  }
  const DIDToken = authorizationHeader.substring(7)
  try {
    magicAdmin.token.validate(DIDToken) // will throw error if token is invalid
    const user = await magicAdmin.users.getMetadataByToken(DIDToken)
    return user
  } catch (err) {
    console.log('error validating token', err)
    res.status(401).json({ message: 'unauthorized' })
    return
  }
}
