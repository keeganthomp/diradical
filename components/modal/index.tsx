import UploadModal from './UploadModal'
import { useRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'

function Modals() {
  const [modal, setModal] = useRecoilState(modalState)
  const closeModal = () => setModal(ModalType.NONE)
  switch (modal) {
    case ModalType.UPLOAD: {
      return <UploadModal onClose={closeModal} />
    }
    case ModalType.NONE: {
      return null
    }
  }
}

export default Modals
