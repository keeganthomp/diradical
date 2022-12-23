import styled from 'styled-components'
import React from 'react'
import useMagicWallet from 'hooks/useMagicWallet'
import UploadForm from 'components/forms/UploadSongForm'
import { IoArrowBack } from 'react-icons/io5'
import { useRouter } from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`
const TopBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
`

const PageTitle = styled.h1`
  margin: 0;
`

const BackButton = styled(IoArrowBack)`
  cursor: pointer;
`

export default function ProfilePage() {
  const router = useRouter()
  const { walletAddress } = useMagicWallet()

  const goBack = () => router.push('/my-music')

  if (!walletAddress)
    return (
      <Container>
        <p>Please Conect</p>
      </Container>
    )

  return (
    <Container>
      <TopBar>
        <BackButton onClick={goBack} size={25} />
        <PageTitle>Upload Song</PageTitle>
        <p />
      </TopBar>
      <UploadForm />
    </Container>
  )
}
