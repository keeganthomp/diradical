import UploadModal from './UploadModal'
import MakeSongAvailableModal from './MakeSongAvailable'
import PurchaseSharesModal from './PurchaseSharesModal'
import { useRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'

function Modals() {
  const [modal, setModal] = useRecoilState(modalState)
  const closeModal = () => setModal({ ...modal, type: ModalType.NONE })
  switch (modal.type) {
    case ModalType.UPLOAD: {
      return <UploadModal onClose={closeModal} />
    }
    case ModalType.MAKE_SONG_AVAILABLE: {
      return (
        <MakeSongAvailableModal
          onClose={closeModal}
          track={modal.state.track}
        />
      )
    }
    case ModalType.PURCHASE_SHARES: {
      return (
        <PurchaseSharesModal onClose={closeModal} track={modal.state.track} />
      )
    }
    case ModalType.NONE: {
      return null
    }
  }
}

export default Modals
