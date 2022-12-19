import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import useModal from 'hooks/useModal'
import { Button } from 'components/ui/Buttons'
import React from 'react'
import useMagicWallet from 'hooks/useMagicWallet'
import useMusic from 'hooks/useMusic'
import Loader from 'components/ui/Loader'

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
  const { openModal, ModalType } = useModal()
  const { walletAddress } = useMagicWallet()
  const { tracks, isLoading } = useMusic(walletAddress)

  const openUploadModal = () => {
    openModal(ModalType.UPLOAD)
  }

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
      <UploadButton onClick={openUploadModal}>upload</UploadButton>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
