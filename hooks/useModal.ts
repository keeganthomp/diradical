import { useRecoilState } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'

const useModal = () => {
  const [currentModal, setModal] = useRecoilState(modalState)

  const openModal = (type: ModalType, error = '') => {
    const hideClose = type === ModalType.SIGNING ? true : false
    setModal(() => ({
      error,
      type: type,
      hideClose,
    }))
  }

  const closeModal = () => {
    setModal(() => ({
      type: ModalType.NONE,
    }))
  }

  return {
    openModal,
    closeModal,
    currentModal,
    ModalType,
    error: currentModal.error,
  }
}

export default useModal
