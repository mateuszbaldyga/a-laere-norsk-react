import React from 'react'
import styled from 'styled-components'
import routesConfig from 'routes.config'

import BarBox from 'components/BarBox'
import HeaderButton from "components/HeaderButton";

const StyledWrapper = styled.div`
`

const StyledBackButton = styled(HeaderButton)`
  transform: scaleX(-1);
`

function PageLessons (props) {

  function backToHome () {
    props.history.push(routesConfig.categories())
  }

  return (
    <StyledWrapper>
      <BarBox>
        <StyledBackButton onClick={backToHome}> ➦ </StyledBackButton>
      </BarBox>
    </StyledWrapper>
  )
}

export default PageLessons
