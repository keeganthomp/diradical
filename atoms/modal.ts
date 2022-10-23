import { atom } from 'recoil'

export enum ModalType {
  UPLOAD = 'UPLOAD',
  MAKE_SONG_AVAILABLE = 'MAKE_SONG_AVAILABLE',
  PURCHASE_SHARES = 'PURCHASE_SHARES',
  NONE = '',
}

type ModalState = {
  type: ModalType
  state: any | null
  onClose?: () => void
}
const modalState = atom({
  key: 'modal',
  default: {
    type: ModalType.NONE,
    state: null as any,
    onClose: null as (ard: any) => void,
  } as ModalState,
})

export default modalState
