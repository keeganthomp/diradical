import { atom } from 'recoil'

export enum ModalType {
  UPLOAD = 'UPLOAD',
  MAKE_SONG_AVAILABLE = 'MAKE_SONG_AVAILABLE',
  PURCHASE_SHARES = 'PURCHASE_SHARES',
  NONE = '',
}

const modalState = atom({
  key: 'modal',
  default: {
    type: ModalType.NONE,
    state: null as any,
  },
})

export default modalState
