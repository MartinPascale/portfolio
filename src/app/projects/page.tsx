'use client';

import { Box, Text } from '@chakra-ui/react';
import AnimatedCard from '../components/AnimatedCard';

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <AnimatedCard>
        <Text fontSize={{ base: '4xl', md: '4xl' }} textAlign="right">
          ℹ️
        </Text>
        <Box flex={1} my="auto">
          <Text fontSize={{ base: '4xl', md: '4xl' }}>UNDER CONSTRUCTION</Text>
          <Text fontSize={{ base: 'xl', md: '2xl' }}>
            This page is under construction. Please check back later.
          </Text>
        </Box>
      </AnimatedCard>
    </Box>
  );
};

export default ProjectsPage;
