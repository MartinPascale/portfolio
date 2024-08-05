'use client';

import { Box, Text } from '@chakra-ui/react';
import ChatbotUI from './components/Chatbot';

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
      <Box textAlign="left" w={{ base: '100%', md: '100%', lg: '66%' }}>
        <Text fontSize={{ base: '4xl', md: '8xl' }}>HI IM MARTIN!</Text>
        <Text fontSize={{ base: 'xl', md: '4xl' }}>
          IM A SENIOR SOFTWARE ENGINEER, AND YOU CAN ASK THE REST TO MY AI
          ASSISTANT BELOW 👇
        </Text>
      </Box>
      <Box w={{ base: '100%', md: '100%', lg: '66%' }}>
        <ChatbotUI />
      </Box>
    </Box>
  );
};

export default HomePage;
