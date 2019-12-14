import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { ModalContext } from 'context'

const StyledWrapper = styled.section`
  background-color: green;
`

function Navigation (props) {
  return (
    <StyledWrapper>
      Navigation Modal :)
    </StyledWrapper>
  )
}

export default Navigation
