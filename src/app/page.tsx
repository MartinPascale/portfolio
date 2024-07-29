'use client';

import { Box, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ChatbotUI from './components/Chatbot';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const activities = [
  'play soccer ⚽️',
  'fly FPV drones 🚁',
  'read about self-improvement 📚',
  'skateboard 🛹',
  'play video games 🎮',
];

const HomePage = () => {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
