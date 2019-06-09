import React, { useState } from 'react'
import styled from 'styled-components'
import routesConfig from 'routes.config'

import BarBox from 'components/BarBox'
import HeaderButton from "components/HeaderButton";
import ActionButton from 'components/ActionButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledMain = styled.main`
  flex-grow: 1;
`

const StyledFooter = styled(BarBox)`
`

const dictionary = {
  'Rzeczowniki': [],
  'Czasowniki': [],
  'Stopniowanie przymiotników': [],
  'Bonus': [],
}

function PageCategories (props) {
  const [category, setCategory] = useState('Rzeczowniki')

  function handleCategoryChange (cat) {
    setCategory(cat)
  }

  function goToLessons () {
    localStorage.setItem('category', category)
    props.history.push(routesConfig.lessons())
  }

  return (
    <StyledWrapper>
      <BarBox>
        <HeaderButton> ☰ </HeaderButton>
        <HeaderButton> 🔍 </HeaderButton>
      </BarBox>

      <StyledMain>
        {Object.keys(dictionary).map((item, index) => {
          return <ActionButton key={index} scFontSize={'B'} scWhiteBg={item !== category} onClick={() => handleCategoryChange(item)}>{ item }</ActionButton>
        })}
      </StyledMain>
      
      <StyledFooter>
        <ActionButton onClick={goToLessons}> GÅ! </ActionButton>
      </StyledFooter>
    </StyledWrapper>
  )
}

export default PageCategories
