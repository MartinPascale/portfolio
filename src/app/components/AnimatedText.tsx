import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  fontSize: string;
  duration: number; // Duration of the animation in seconds
  amplitude: number; // Amplitude of the movement
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  fontSize,
  duration,
  amplitude,
  className = '',
}) => {
  const letters = Array.from(text);
  const keyframes = generateParabolicKeyframes(duration, amplitude);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: Math.max(0.5, duration - 0.5),
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
    <motion.div
      className={`animated-text ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ fontSize, display: 'flex' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '2px' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
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
