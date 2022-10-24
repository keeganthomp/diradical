import BaseModal from './Base'
import UploadForm from 'components/forms/UploadSongForm'

function UploadModal({ onClose }: { onClose: () => void }) {
  return (
    <BaseModal onClose={onClose}>
      <UploadForm onSubmit={onClose} />
    </BaseModal>
  )
}

export default UploadModal
