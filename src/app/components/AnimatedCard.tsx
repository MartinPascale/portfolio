// components/AnimatedCard.tsx
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  width?: string;
}

const MotionBox = motion(Box);

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, width }) => {
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 30;
    const y = ((e.clientY - top) / height - 0.5) * -30; // Inverted to rotate correctly
    setTransform({ rotateX: y, rotateY: x, scale: 1.05 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <MotionBox
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: transform.scale,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        perspective: '1000px',
        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'white',
        transformStyle: 'preserve-3d',
        height: '100%',
        width: width ?? '400px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedCard;
