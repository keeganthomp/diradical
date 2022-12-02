import { atom } from 'recoil'

export enum ModalType {
  UPLOAD = 'UPLOAD',
  SIGNING = 'PLEASE_WAIT',
  ERROR = 'ERROR',
  NONE = '',
}

type ModalState = {
  type: ModalType
  onClose?: () => void
  hideClose?: boolean
  error?: string
}
const modalState = atom({
  key: 'modal',
  default: {
    type: ModalType.NONE,
    onClose: null as () => void,
    error: '',
    hideClose: false,
  } as ModalState,
})

export default modalState
