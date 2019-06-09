import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    height: 50px;
`

function BarBox (props) {
  return (
    <StyledWrapper>
        {props.children}
    </StyledWrapper>
  )
}

export default BarBox
