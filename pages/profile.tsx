import React from 'react'
import { getSession } from '@auth0/nextjs-auth0'
import styled from 'styled-components'
import prisma from 'lib/prisma'
import { NextPageContext } from 'next'
import { getWalletFromMdk } from 'lib/encryption'
import { User, Track, Album } from '@prisma/client'
import LoginButton from 'components/ui/Buttons/LoginButton'
import Tabs from 'components/ui/Tabs'
import { Tab } from 'types'
import UserTacks from 'components/user/UserTracks'
import UserSettings from 'components/user/Settings'
import UploadForm from 'components/forms/UploadForm'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

type Props = {
  user: (User & { singles: Track[]; albums: Album[]; wallet: string }) | null
}

const ProfilePage = ({ user }: Props) => {
  if (!user) {
    return (
      <Container>
        <h1>Please login or create account to view your profile</h1>
        <LoginButton />
      </Container>
    )
  }

  const { singles: tracks } = user

  const ProfileTabs: Tab[] = [
    {
      title: 'Settings',
      Component: () => <UserSettings user={user} wallet={user.wallet} />,
    },
    {
      title: 'My Tracks',
      Component: () => <UserTacks tracks={tracks} user={user} />,
    },
    {
      title: 'Upload',
      Component: () => <UploadForm />,
    },
  ]

  return (
    <Container>
      <p>{user.wallet}</p>
      <Tabs tabs={ProfileTabs} />
    </Container>
  )
}

export default ProfilePage

export async function getServerSideProps(context: NextPageContext) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )
  const session = getSession(context.req, context.res)
  if (!session)
    return {
      props: {
        user: null,
      },
    }
  const userWithMusic = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    select: {
      mdk: true,
      email: true,
      username: true,
      singles: {
        orderBy: {
          createdAt: 'desc', // newest first
        },
      },
      albums: {
        orderBy: {
          createdAt: 'desc', // newest first
        },
      },
    },
  })
  if (!userWithMusic)
    return {
      props: {
        user: null,
      },
    }
  const { mdk, ...rest } = userWithMusic
  const wallet = getWalletFromMdk(mdk)
  const props = {
    ...rest,
    wallet: wallet.addr, // public wallet address
  }
  return {
    props: {
      user: JSON.parse(JSON.stringify(props)),
    },
  }
}
