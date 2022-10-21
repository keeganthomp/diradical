import AudioGrid from 'components/audio/AudioGrid'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'
import Button from 'components/ui/Buttons/Base'
import { TrackWithArtist } from 'types'
import Loader from 'components/ui/Loader'

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
  const {
    isLoading,
    error,
    data: userTracks,
  } = useQuery<TrackWithArtist[]>(
    'userTracks',
    () => fetch(`/api/tracks/user`).then((res) => res.json()),
    {
      refetchInterval: 10000,
    },
  )

  const openUploadModal = () => {
    setModal(ModalType.UPLOAD)
  }

  if (isLoading) return <Loader />
  if (error) return <p>Unable to fetch tracks</p>
  const hasNoTracks = userTracks.length === 0
  if (hasNoTracks) return <Message>You have not uploaded any tracks.</Message>
  return (
    <Container>
      <UploadButton onClick={openUploadModal}>Upload</UploadButton>
      <AudioGrid
        tracks={userTracks.map((t) => ({
          ...t,
          artist: t.artist,
        }))}
      />
    </Container>
  )
}
