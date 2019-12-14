import React from 'react'

const payload = {
  modalName: '',
  openModal(name) {
    payload.modalName = name
    console.log('🦄 payload.', payload.modalName)
  },
  closeModal() {
    payload.modalName = ''
  }
}

export const ModalContext = React.createContext(payload)
