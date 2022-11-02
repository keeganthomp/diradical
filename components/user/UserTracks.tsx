import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import { useSetRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'
import Button from 'components/ui/Buttons/Base'
import Loader from 'components/ui/Loader'
import useMusic from 'hooks/useMusic'

const Message = styled.p`
  text-align: center;
`

const UploadButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

const Container = styled.div`
  text-align: center;
`

export default function UserTacks() {
  const setModal = useSetRecoilState(modalState)
  const { isLoading, error, data: userTracks } = useMusic(true)

  const openUploadModal = () => {
    setModal({ type: ModalType.UPLOAD, state: null })
  }

  if (isLoading || !userTracks)
    return (
      <Container>
        <Loader />
      </Container>
    )
  if (error)
    return (
      <Container>
        <p>unable to fetch tracks</p>
      </Container>
    )
  const hasNoTracks = userTracks.length === 0
  if (hasNoTracks)
    return (
      <Container>
        <UploadButton onClick={openUploadModal}>upload</UploadButton>
        <Message>you have not uploaded any tracks</Message>
      </Container>
    )
  return (
    <Container>
      <UploadButton onClick={openUploadModal}>upload</UploadButton>
      <AudioGrid
        tracks={userTracks.map((t) => ({
          ...t,
          artist: t.artist,
        }))}
      />
    </Container>
  )
}
