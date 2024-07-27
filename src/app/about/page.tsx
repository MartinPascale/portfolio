// app/about/page.tsx
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Box padding="20px" maxWidth="800px" margin="auto">
      <Heading as="h1" marginBottom="10px">
        About Me
      </Heading>
      <Text>This is the about page of my portfolio website.</Text>
    </Box>
  );
};

export default AboutPage;
