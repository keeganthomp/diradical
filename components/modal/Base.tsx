import React from 'react'
import Modal from 'react-modal'
import { IoCloseOutline } from 'react-icons/io5'
import styled from 'styled-components'
import useModal from 'hooks/useModal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    background: 'transparent',
    color: '#fff',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
    zIndex: 10,
  },
}

Modal.setAppElement('#__next')

const CloseIcon = styled(IoCloseOutline)`
  font-size: 1.25rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`

function BaseModal({ children }: { children: React.ReactNode }) {
  const { currentModal, closeModal } = useModal()
  return (
    <Modal isOpen style={customStyles} contentLabel='Example Modal'>
      <CloseIcon onClick={closeModal} />
      {children}
    </Modal>
  )
}

export default BaseModal
