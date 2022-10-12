import React from 'react'
import { getSession } from '@auth0/nextjs-auth0'
import { NextPageContext } from 'next'
import prisma from 'lib/prisma'
import Router from 'next/router'
import { generateWalletMdk } from 'lib/encryption'

const AuthSucess = ({ done }) => {
  React.useEffect(() => {
    if (done) {
      Router.replace('/')
    }
  }, [done])

  return <p>Loading...</p>
}

export default AuthSucess

export async function getServerSideProps(context: NextPageContext) {
  const session = getSession(context.req, context.res)
  const result = {
    props: {
      done: true,
    },
  }
  if (!session) return result
  // create user in DB if not exist
  try {
    const mdk = generateWalletMdk()
    const user = await prisma.user.upsert({
      where: {
        email: session.user.email,
      },
      update: {},
      create: {
        mdk,
        email: session.user.email,
      },
    })
    return result
  } catch {
    return result
  }
}
