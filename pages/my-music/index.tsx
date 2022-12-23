import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import React from 'react'
import useMagicWallet from 'hooks/useMagicWallet'
import useMusic from 'hooks/useMusic'
import Loader from 'components/ui/Loader'
import { useRouter } from 'next/router'

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
  const { tracks, isLoading } = useMusic(walletAddress)

  const gotoUpload = () => router.push('/my-music/upload')

  if (!walletAddress)
    return (
      <Container>
        <p>Please Conect</p>
      </Container>
    )

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
