import { atom } from 'recoil'

export enum ModalType {
  UPLOAD = 'UPLOAD',
  NONE = '',
}

const modalState = atom({
  key: 'modal',
  default: ModalType.NONE,
})

export default modalState
