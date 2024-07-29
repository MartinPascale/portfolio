import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'rgb(236, 232, 222)',
        zIndex: 10,
        textShadow: 'rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px',
        // opacity: 1,
        // transition:
        //   'opacity 0.1s ease 0.1s, transform 0.1s cubic-bezier(0.175, 0.885, 0.195, 1.115) 0.1s, height 0s ease 0s',
      },
    },
  },
  fonts: {
    heading: "'m6x11', sans-serif",
    body: "'m6x11', sans-serif",
  },
});

export default theme;
