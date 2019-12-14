import React, {useState, useContext} from 'react'
import styled from 'styled-components'

import { ModalContext } from 'context'

import Navigation from 'components/modals/Navigation'

const StyledWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: red;
  opacity: 0.5;
`

function ModalContainer (props) {
  const modal = useContext(ModalContext)

  if (!modal.modalName) return null

  const modals = {
    Navigation
  }

  const ModalComponent = modals[modal.modalName]

  return (
    <StyledWrapper>
      <ModalComponent/>
    </StyledWrapper>
  )
}

export default ModalContainer
