import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    background: '#000',
    color: '#fff',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 10,
  },
}

Modal.setAppElement('#__next')

function BaseModal({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Example Modal'
    >
      {children}
    </Modal>
  )
}

export default BaseModal
