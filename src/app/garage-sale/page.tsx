'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
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
    <Box display="flex" flexDir="column" alignItems="center" gap={6}>
      <Box className="box-container" display="flex" gap={4} flexWrap="wrap" justifyContent="center">
        {displayed.map((item) => (
          <AnimatedCard key={item.id} width="200px">
            <Box display="flex" flexDir="column" alignItems="center" gap={2}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.name} style={{ width: '100%' }} />
              <Text fontSize="lg" textAlign="center">
                {item.name} - {item.price}
              </Text>
            </Box>
          </AnimatedCard>
        ))}
      </Box>
      <Button onClick={reroll}>Reroll</Button>
      <Box className="box-container" mt={8}>
        <Table variant="simple" maxW="600px" width="100%">
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
