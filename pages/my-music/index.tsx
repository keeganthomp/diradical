import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import React from 'react'
import useMagicWallet from 'hooks/useWallet'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'
import { useRouter } from 'next/router'
import PleaseConnect from 'components/ui/PleaseConnect'

const UploadButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ProfilePage() {
  const router = useRouter()
  const { walletAddress } = useMagicWallet()
  const { tracks, isLoading } = useUserMusic(walletAddress)

  const gotoUpload = () => router.push('/my-music/upload')

  if (!walletAddress) return <PleaseConnect />

  if (isLoading)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  return (
    <Container>
      <UploadButton onClick={gotoUpload}>upload</UploadButton>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
