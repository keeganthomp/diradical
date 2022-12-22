import BaseModal from './Base'
import UploadForm from 'components/forms/UploadSongForm'
import useModal from 'hooks/useModal'
import { ErrorMessage } from 'types'

function UploadModal() {
  const { closeModal, openModal, ModalType } = useModal()

  const handleError = (e: any) => {
    if (e.message === ErrorMessage.SEASON_OVER) {
      openModal(ModalType.ERROR, 'Season is over!')
    }
  }

  const handleSumbit = () => {
    closeModal()
  }

  return (
    <BaseModal>
      <UploadForm onSubmit={handleSumbit} onError={handleError} />
    </BaseModal>
  )
}

export default UploadModal
