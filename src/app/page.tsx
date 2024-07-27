import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box padding="20px" maxWidth="800px" margin="auto">
      <Heading as="h1" marginBottom="10px">
        Welcome to My Portfolio
      </Heading>
      <Text>This is the home page of my portfolio website.</Text>
    </Box>
  );
};

export default HomePage;
