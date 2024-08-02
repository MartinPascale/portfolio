import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

type AnimatedTextProps = {
  text: string;
  duration?: number; // Duration of the animation in seconds
  amplitude?: number; // Amplitude of the movement
  delay?: number; // Delay before the animation starts
} & React.ComponentProps<typeof Box>;

const MotionBox = motion(Box);

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  duration = 2,
  amplitude = 12,
  delay = 0.5,
  ...rest
}) => {
  const letters = Array.from(text);
  const keyframes = generateParabolicKeyframes(duration, amplitude);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      y: keyframes,
      opacity: 1,
      transition: {
        y: {
          type: 'keyframes',
          duration: duration,
          repeat: Infinity,
          repeatDelay: 0,
        },
      },
    },
    hidden: {
      opacity: 1,
      y: amplitude / 2,
    },
  };

  return (
    <MotionBox
      className={`animated-text ${rest.className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex' }}
      {...rest}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '2px' }}
        >
          {/* If letter is uppercase then leave a blank space before the letter */}
          {letter === ' ' ? '\u00A0' : ''}
          {letter}
        </motion.span>
      ))}
    </MotionBox>
  );
};

// Utility function to generate parabolic keyframes
const generateParabolicKeyframes = (duration: number, amplitude: number) => {
  const frames = 24 * duration;
  const keyframes = [];
  for (let i = 0; i < frames; i++) {
    const progress = (i / frames) * 2 - 1; // Progress from -1 to 1
    const y = 5 - amplitude * (progress * progress); // Parabolic equation with vertex at y=5
    keyframes.push(y);
  }
  return keyframes;
};

export default AnimatedText;
