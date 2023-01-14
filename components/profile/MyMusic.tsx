import AudioGrid from 'components/audio/AudioGrid'
import React, { useEffect } from 'react'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

export default function MyMusic() {
  const router = useRouter()
  const { user, isAuthenticated, isAuthenticating } = useUser()
  const { tracks, isFetching } = useUserMusic(user?.username)

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  if (isFetching) return <Loader color='#000' />

  return <AudioGrid tracks={tracks} />
}
