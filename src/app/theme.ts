import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        overflow: 'hidden',
      },
      'html, body': {
        color: 'rgb(236, 232, 222)',
        zIndex: 10,
        textShadow: 'rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px',
      },
    },
  },
  fonts: {
    heading: "'m6x11', sans-serif",
    body: "'m6x11', sans-serif",
  },
});

export default theme;
