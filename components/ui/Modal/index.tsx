import useModal from 'hooks/useModal'
import ErrorModal from 'components/ui/Modal/ErrorModal'

function Modals() {
  const { currentModal, ModalType } = useModal()

  switch (currentModal.type) {
    case ModalType.ERROR: {
      return <ErrorModal />
    }
    case ModalType.NONE: {
      return null
    }
  }
}

export default Modals
