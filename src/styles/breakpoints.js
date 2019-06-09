import { css } from 'styled-components'

const breakpoints = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  hover: 576,
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export { media, breakpoints }
