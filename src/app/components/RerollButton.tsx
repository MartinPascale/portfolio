'use client';
import { Button, Text, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

interface RerollButtonProps extends ButtonProps {
  dollars: number;
}

export default function RerollButton({ dollars, children, ...rest }: RerollButtonProps) {
  return (
    <MotionButton
      bg="#48BB78"
      border="2px solid #2F855A"
      color="#FFFFFF"
      _hover={{ bg: '#2F855A' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={4}
      px={6}
      fontSize="lg"
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      <Text lineHeight="1" fontSize="xl">
        {children}
      </Text>
      <Text lineHeight="1" fontSize="sm">
        ${`$${dollars}`}
      </Text>
    </MotionButton>
  );
}
