import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const MotionButton = motion(Button);

const AnimatedButton = ({ children }: PropsWithChildren) => {
  return (
    <MotionButton
      whileHover={{
        filter:
          'drop-shadow(rgba(0, 0, 0, 0.81) 0px 2px 2px) hue-rotate(-25deg)',
        transform: 'translateY(2px)',
        transition: { duration: 0.3 },
        backgroundColor: '#ECB77A',
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </MotionButton>
  );
};

export default AnimatedButton;
