import { useRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'

import UploadModal from './UploadModal'
import PurchaseSharesModal from './PurchaseOwnership'
import PleaseWaitModal from './PleaseWait'
import ErrorModal from './ErrorModal'

function Modals() {
  const [modal, setModal] = useRecoilState(modalState)
  const closeModal = () => {
    if (modal.onClose) modal.onClose()
    setModal({ type: ModalType.NONE, state: null, onClose: null })
  }

  switch (modal.type) {
    case ModalType.UPLOAD: {
      return <UploadModal onClose={closeModal} />
    }
    case ModalType.PURCHASE_SHARES: {
      return (
        <PurchaseSharesModal onClose={closeModal} track={modal.state.track} />
      )
    }
    case ModalType.PLEASE_WAIT: {
      return <PleaseWaitModal onClose={closeModal} />
    }
    case ModalType.ERROR: {
      return <ErrorModal onClose={closeModal} />
    }
    case ModalType.NONE: {
      return null
    }
  }
}

export default Modals
