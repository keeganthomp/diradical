import useModal from 'hooks/useModal'
import UploadModal from './UploadModal'
import SigningModal from './Signing'
import ErrorModal from './ErrorModal'

function Modals() {
  const { currentModal, ModalType } = useModal()

  switch (currentModal.type) {
    case ModalType.UPLOAD: {
      return <UploadModal />
    }
    case ModalType.SIGNING: {
      return <SigningModal />
    }
    case ModalType.ERROR: {
      return <ErrorModal />
    }
    case ModalType.NONE: {
      return null
    }
  }
}

export default Modals
