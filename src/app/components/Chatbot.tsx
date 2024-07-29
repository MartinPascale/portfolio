import { Box, HStack, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import AnimatedText from './AnimatedText';

const ChatbotUI = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: 'bot',
        content:
          'Ask me anything about Martin! eg: What does Martin like to do?',
      },
    ],
  );

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'bot', content: data.data },
        ]);
      })
      .catch((error) => console.error('Error:', error));

    setInput('');
  };

  return (
    <Box className="chatbot-container">
      <Box className="chatbot-header">
        <AnimatedText
          text="Chatbot"
          fontSize="20px"
          duration={2}
          amplitude={12}
          className="header-text"
        />
      </Box>
      <Box
        className="chatbot-messages"
        style={{
          overflowY: 'auto',
          maxHeight: '300px',
          padding: '10px',
          backgroundColor: '#444',
          borderRadius: '10px',
          marginBottom: '10px',
        }}
      >
        {messages.map((msg, index) => (
          <Text
            key={index}
            className={msg.role === 'user' ? 'user-message' : 'bot-message'}
          >
            {msg.content}
          </Text>
        ))}
      </Box>
      <HStack className="chatbot-input" spacing={2}>
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <AnimatedButton onClick={handleSend}>Send</AnimatedButton>
      </HStack>
    </Box>
  );
};

export default ChatbotUI;
