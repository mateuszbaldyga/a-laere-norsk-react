import React from 'react'
import styled from 'styled-components'

const fontSizes = {
  A: '50px',
  B: '26px',
}

const StyledButton = styled.button`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${p => fontSizes[p.scFontSize || 'A']};
    color: ${p => p.scWhiteBg ? p.theme.color.black : p.theme.color.white};
    background-color: ${p => p.scWhiteBg ? p.theme.color.white : p.theme.color.midnightBlue};
`

function ActionButton (props) {
  return (
    <StyledButton scFontSize={props.scFontSize} scWhiteBg={props.scWhiteBg} onClick={props.onClick}>
        {props.children}
    </StyledButton>
  )
}

export default ActionButton
