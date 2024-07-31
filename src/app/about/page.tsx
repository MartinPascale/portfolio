'use client';
import { Box, Heading, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AboutCardList from '../components/AboutCardList';

const MotionBox = motion(Box);

const activities = [
  'play soccer ⚽️',
  'fly FPV drones 🚁',
  'read about self-improvement 📚',
  'skateboard 🛹',
  'play video games 🎮',
];

const AboutPage = () => {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box padding="20px" maxWidth="800px" margin="auto">
      <Heading as="h1" marginBottom="10px">
        About Me
      </Heading>
      <Text fontSize="4xl" display="inline">
        I like to
      </Text>
      <AnimatePresence mode="wait">
        <MotionBox
          key={activityIndex} // Key changes on every activity change to trigger the animation
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          style={{ display: 'inline-block', position: 'relative' }}
        >
          <Text fontSize="4xl" display="inline" ml={3}>
            {`${activities[activityIndex]}`}
          </Text>
        </MotionBox>
      </AnimatePresence>
      <Box mt={10}>
        <AboutCardList />
      </Box>
    </Box>
  );
};

export default AboutPage;
