/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      'custom-red': 'hsl(1, 90%, 64%)',
      'custom-blue': 'hsl(219, 85%, 26%)'
    },
    neutral: {
      'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
      'light-grayish-blue': 'hsl(211, 68%, 94%)',
      'light-grayish-blue-two': 'hsl(205, 33%, 90%)',
      'grayish-blue': 'hsl(219, 14%, 63%)',
      'dark-grayish-blue': 'hsl(219, 12%, 42%)',
      'very-dark-blue': 'hsl(224, 21%, 14%)'
    }
  },
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`
  },
  initialColorMode: 'light',
  useSystemColorMode: false
})
