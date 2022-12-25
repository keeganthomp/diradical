import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import React from 'react'
import useMagicWallet from 'hooks/useWallet'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'
import PleaseConnect from 'components/ui/PleaseConnect'
import { devices } from 'styles/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 4.5rem;
  @media ${devices.mobile} {
    overflow: hidden;
    padding-bottom: 10px;
  }
`

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

export default function ProfilePage() {
  const { walletAddress } = useMagicWallet()
  const { tracks, isLoading } = useUserMusic(walletAddress)

  if (!walletAddress) return <PleaseConnect />

  if (isLoading)
    return (
      <Container>
        <Loader color='#000' />
      </Container>
    )

  return (
    <Container>
      <Title>My Music</Title>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
