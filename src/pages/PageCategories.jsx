import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import routesConfig from 'routes.config'

import rzeczowniki from 'dictionary/rzeczowniki'

import BarBox from 'components/BarBox'
import HeaderButton from "components/HeaderButton";
import ActionButton from 'components/ActionButton';
import { ModalContext } from 'context'

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
  'Rzeczowniki': rzeczowniki,
  'Czasowniki': [],
  'Stopniowanie przymiotników': [],
  'Bonus': [],
}

function PageCategories (props) {
  const [category, setCategory] = useState('Rzeczowniki')
  const {openModal, modalName} = useContext(ModalContext)

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
        <HeaderButton onClick={() => {openModal('Navigation'); console.log(modalName)}}> ☰ </HeaderButton>
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
