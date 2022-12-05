import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import useModal from 'hooks/useModal'
import Button from 'components/ui/Buttons/Base'
import React from 'react'
import useMagicWallet from 'hooks/useMagicWallet'

const UploadButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

const Container = styled.div`
  text-align: center;
`

export default function UserTacks() {
  const { openModal, ModalType } = useModal()
  const { walletAddress } = useMagicWallet()

  const openUploadModal = () => {
    openModal(ModalType.UPLOAD)
  }

  if (!walletAddress)
    return (
      <Container>
        <p>Please Conect</p>
      </Container>
    )

  return (
    <Container>
      <UploadButton onClick={openUploadModal}>upload</UploadButton>
      <AudioGrid wallet={walletAddress} />
    </Container>
  )
}
