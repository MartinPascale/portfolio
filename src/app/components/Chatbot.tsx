import { Box, HStack, Input, Link, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import AnimatedButton from './AnimatedButton';
import AnimatedText from './AnimatedText';
import ChatbotMessage from './ChatbotMessage';

const ChatbotUI = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: 'bot',
        content:
          'Ask me anything about Martin! eg: What does Martin like to do?',
      },
    ],
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    setLoading(true);
    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'bot', content: data.data },
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setInput('');
    }
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
      <Box className="chatbot-messages">
        {messages.map((msg, index) => (
          <ChatbotMessage key={index} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <HStack className="chatbot-input" spacing={2}>
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <AnimatedButton onClick={handleSend} isLoading={loading}>
          Send
        </AnimatedButton>
      </HStack>
    </Box>
  );
};

export default ChatbotUI;
