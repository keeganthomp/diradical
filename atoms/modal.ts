import { atom } from 'recoil'

export enum ModalType {
  ERROR = 'ERROR',
  NONE = '',
}

type ModalState = {
  type: ModalType
  onClose?: () => void
  error?: string
}
const modalState = atom({
  key: 'modal',
  default: {
    type: ModalType.NONE,
    onClose: null as () => void,
    error: '',
  } as ModalState,
})

export default modalState
