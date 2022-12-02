import BaseModal from './Base'
import UploadForm from 'components/forms/UploadSongForm'
import useModal from 'hooks/useModal'

function UploadModal() {
  const { closeModal } = useModal()
  return (
    <BaseModal>
      <UploadForm onSubmit={closeModal} />
    </BaseModal>
  )
}

export default UploadModal
