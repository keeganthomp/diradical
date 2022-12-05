import magic from 'lib/magic'

// const handleLogin = async (e) => {
//   e.preventDefault()
//   const email = new FormData(e.target).get('email')
//   if (email) {
//     /* One-liner login with email OTP 🤯 */
//     await magic.auth.loginWithEmailOTP({ email })
//     render()
//   }
// }
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  try {
    const didToken = req.headers.authorization.substr(7)
    await magic.token.validate(didToken)
    res.status(200).json({ sucess: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'unable to register user' })
  }
}
