import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    height: 50px;
    width: 50px;
`

function HeaderButton (props) {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>
        {props.children}
    </StyledButton>
  )
}

export default HeaderButton
