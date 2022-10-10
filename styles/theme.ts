import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    background: 'black',
    surface: '#395B64',
    main: '#A5C9CA',
    accent: '#E7F6F2',
  },
}

const sizes = {
  mobile: '850px',
  small: '1140px',
  medium: '1420px',
  large: '1550px',
  xl: '2560px',
}

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  small: `(max-width: ${sizes.small})`,
  medium: `(max-width: ${sizes.medium})`,
  large: `(max-width: ${sizes.large})`,
  xl: `(max-width: ${sizes.xl})`,
}

export default theme
