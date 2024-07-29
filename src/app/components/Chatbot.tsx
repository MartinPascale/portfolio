import { Box, Button, HStack, Input, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const ChatbotUI = () => {
  return (
    <Box className="chatbot-container">
      <Box className="chatbot-header">
        <Text className="header-text">Chatbot</Text>
      </Box>
      <Box className="chatbot-messages">
        <Text className="message">Ask me anything about Martin!</Text>
        {/* Messages will be dynamically added here */}
      </Box>
      <HStack className="chatbot-input" spacing={2}>
        <Input placeholder="Type a message..." />
        <AnimatedButton>Send</AnimatedButton>
      </HStack>
    </Box>
  );
};

export default ChatbotUI;
