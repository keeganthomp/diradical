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
    background: 'transparent',
    color: '#fff',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'saturate(180%) blur(20px)',
    '-webkit-backdrop-filter': 'saturate(180%) blur(20px)',
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
