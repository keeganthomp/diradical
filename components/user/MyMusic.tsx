import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import useModal from 'hooks/useModal'
import Button from 'components/ui/Buttons/Base'
import useUser from 'hooks/useReachAccount'
import React from 'react'

const UploadButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

const Container = styled.div`
  text-align: center;
`

export default function UserTacks() {
  const { reachAcc } = useUser()
  const { openModal, ModalType } = useModal()

  const openUploadModal = () => {
    openModal(ModalType.UPLOAD)
  }

  if (!reachAcc)
    return (
      <Container>
        <p>Please Conect</p>
      </Container>
    )

  return (
    <Container>
      <UploadButton onClick={openUploadModal}>upload</UploadButton>
      <AudioGrid wallet={reachAcc?.networkAccount?.address} />
    </Container>
  )
}
