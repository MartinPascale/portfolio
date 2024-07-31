import { Box, Link, Text } from '@chakra-ui/react';

const ChatbotMessage = ({
  message,
}: {
  message: { content: string; role: string };
}) => {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;

  const parts = message.content
    .split(linkRegex)
    .map((part, index) => {
      if (index % 3 === 0) {
        return (
          <Text as="span" key={index}>
            {part}
          </Text>
        );
      } else if (index % 3 === 1) {
        const linkText = part;
        const linkUrl = message.content.split(linkRegex)[index + 1];
        return (
          <Link href={linkUrl} color="teal.500" isExternal key={index}>
            {linkText}
          </Link>
        );
      }
      return null;
    })
    .filter(Boolean);

  return (
    <Box className={message.role === 'user' ? 'user-message' : 'bot-message'}>
      {parts}
    </Box>
  );
};

export default ChatbotMessage;
