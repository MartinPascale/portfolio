'use client';

import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ChatbotUI from './components/Chatbot';

const MotionBox = motion(Box);

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        textAlign="left"
        w={{ base: '100%', md: '100%', lg: '66%' }}
      >
        <Text fontSize={{ base: '4xl', md: '8xl' }}>HI IM MARTIN!</Text>
        <Text fontSize={{ base: 'xl', md: '4xl' }}>
          IM A SENIOR SOFTWARE ENGINEER, AND YOU CAN ASK THE REST TO MY AI
          ASSISTANT BELOW 👇
        </Text>
      </MotionBox>
      <Box w={{ base: '100%', md: '100%', lg: '66%' }}>
        <ChatbotUI />
      </Box>
    </Box>
  );
};

export default HomePage;
