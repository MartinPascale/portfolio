'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import AnimatedCard from '../components/AnimatedCard';
import { GarageItem, garageItems } from '@/constants/garageSale';

const START_MONEY = 20;

const GarageSalePage = () => {
  const [displayed, setDisplayed] = useState<GarageItem[]>([]);
  const [money, setMoney] = useState(START_MONEY);

  const pickItems = () => {
    const shuffled = [...garageItems].sort(() => 0.5 - Math.random());
    setDisplayed(shuffled.slice(0, 3));
  };

  const reroll = () => {
    if (money < 5) return;
    pickItems();
    setMoney(money - 5);
  };

  useEffect(() => {
    pickItems();
    const header = document.querySelector('header');
    const prevDisplay = header?.style.display;
    if (header) (header as HTMLElement).style.display = 'none';
    return () => {
      if (header) (header as HTMLElement).style.display = prevDisplay || '';
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      minHeight="100vh"
      width="100%"
    >
      <Box flex="1" display="flex" flexDirection="column" bg="#F7FAFC" pb={{ base: '140px', md: 0 }}>
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={4}
          p={4}
          flex="1"
        >
          {displayed.map((item) => (
            <Box key={item.id} border="1px solid #E2E8F0" borderRadius="md" boxShadow="sm">
              <AnimatedCard width="100%">
                <NextImage
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                  unoptimized
                />
                <Box mt={2}>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.price}</Text>
                  <Text fontSize="sm">{item.notes}</Text>
                </Box>
              </AnimatedCard>
            </Box>
          ))}
        </Grid>
        <Box overflowX="auto" px={4}>
          <Table bg="white" border="1px solid #E2E8F0">
            <Thead bg="#EDF2F7">
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Notes</Th>
              </Tr>
            </Thead>
            <Tbody>
              {garageItems.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} width="50" />
                  </Td>
                  <Td>{item.name}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.price}</Td>
                  <Td>{item.notes}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box mt="auto" bg="#EDF2F7" textAlign="center" py={2}>
          <Text color="#4A5568">© 2025 My Garage Sale</Text>
        </Box>
      </Box>
      <Box
        width={{ base: '100%', md: '250px' }}
        bg="#2D3748"
        color="#EDF2F7"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        position={{ base: 'fixed', md: 'static' }}
        bottom={{ base: 0, md: 'auto' }}
        left={{ base: 0, md: 'auto' }}
        right={{ base: 0, md: 'auto' }}
      >
        <Text fontSize="2xl" textAlign="center">
          Garage Sale
        </Text>
        <Text>Browse our items below</Text>
        <Box
          bg="#1A202C"
          color="#FFFFFF"
          px={4}
          py={2}
          borderRadius="md"
          data-testid="money"
        >
          {`Money: $${money}`}
        </Box>
        <Button
          bg="#48BB78"
          border="2px solid #2F855A"
          color="#FFFFFF"
          _hover={{ bg: '#2F855A' }}
          onClick={reroll}
          isDisabled={money < 5}
        >
          Reroll ($5)
        </Button>
      </Box>
    </Box>
  );
};

export default GarageSalePage;
