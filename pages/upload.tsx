import styled from 'styled-components'
import React from 'react'
import useMagicWallet from 'hooks/useWallet'
import UploadForm from 'components/forms/UploadSongForm'
import PleaseConnect from 'components/ui/PleaseConnect'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`

const Title = styled.h1``

export default function ProfilePage() {
  const { walletAddress } = useMagicWallet()

  if (!walletAddress) return <PleaseConnect />

  return (
    <Container>
      <Title>Upload Track</Title>
      <UploadForm />
    </Container>
  )
}
