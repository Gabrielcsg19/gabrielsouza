import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#030304',
      '800': '#0F0F11',
      '700': '#4B4B51',
      '600': '#85858E',
      '50': '#F2F2F2',
    },
    red: {
      '700': '#EC0D13',
    },
  },
  fonts: {
    heading: 'Jost',
    body: 'Jost',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
  sizes: {
    container: {
      lg: '1100px',
      '2xl': '1600px',
    },
  },
});
