import UploadModal from './UploadModal'
import MakeSongAvailableModal from './MakeSongAvailable'
import PurchaseSharesModal from './PurchaseOwnership'
import LoginModal from './LoginModal'
import PleaseWaitModal from './PleaseWait'
import { useRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'
import { useUser } from '@auth0/nextjs-auth0'

function Modals() {
  const { user } = useUser()
  const [modal, setModal] = useRecoilState(modalState)
  const closeModal = () => {
    if (modal.onClose) modal.onClose()
    setModal({ type: ModalType.NONE, state: null, onClose: null })
  }

  if (modal.type !== ModalType.NONE && !user)
    return <LoginModal onClose={closeModal} />

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
    case ModalType.PLEASE_WAIT: {
      return <PleaseWaitModal onClose={closeModal} />
    }
    case ModalType.NONE: {
      return null
    }
  }
}

export default Modals
