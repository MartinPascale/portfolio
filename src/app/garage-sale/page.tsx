'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
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

const GarageSalePage = () => {
  const [displayed, setDisplayed] = useState<GarageItem[]>([]);

  const reroll = () => {
    const shuffled = [...garageItems].sort(() => 0.5 - Math.random());
    setDisplayed(shuffled.slice(0, 3));
  };

  useEffect(() => {
    reroll();
  }, []);

  return (
    <Box display="flex" flexDir={{ base: 'column', lg: 'row' }} gap={6} alignItems="flex-start">
      <Box flex="1" className="box-container">
        <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
          {displayed.map((item) => (
            <AnimatedCard key={item.id} width="250px">
              <Box display="flex" flexDir="column" alignItems="center" gap={2}>
                <NextImage src={item.image} alt={item.name} width={300} height={200} style={{ width: '100%', height: 'auto' }} unoptimized />
                <Text fontSize="lg" textAlign="center">
                  {item.name} - {item.price}
                </Text>
              </Box>
            </AnimatedCard>
          ))}
        </Box>
        <Button onClick={reroll} mt={4} display="block" mx="auto">
          Reroll
        </Button>
      </Box>
      <Box flex="1" className="box-container">
        <Table variant="simple" width="100%">
          <Thead>
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
    </Box>
  );
};

export default GarageSalePage;
