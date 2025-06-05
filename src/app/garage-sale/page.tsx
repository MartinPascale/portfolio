'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Link,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import AnimatedCard from '../components/AnimatedCard';
import RerollButton from '../components/RerollButton';
import PriceBadge from '../components/PriceBadge';
import DescriptionPopover from '../components/DescriptionPopover';
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
    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} minHeight="100vh" width="100%" className="garage-bg">
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
        zIndex={1}
      >
        <Text fontSize="4xl" textAlign="center">
          Garage Sale
        </Text>
        <Text fontSize="2xl">Browse our items below</Text>
        <PriceBadge
          price={`$${money}`}
          position="static"
          transform="none"
          px={8}
          py={6}
          fontSize="2xl"
          data-testid="money"
        />
        <RerollButton onClick={reroll} isDisabled={money < 5} dollars={5} aria-label="Reroll $5">
          Reroll
        </RerollButton>
        <Box mt="auto" display="flex" flexDirection="column" alignItems="center" gap={1} pb={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/garage-sale">Garage Sale</Link>
        </Box>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        pb={{ base: '140px', md: 0 }}
      >
        <Box width="100%" p={4} className="box-container" mb={4}>
          <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
            {displayed.map((item) => (
              <Box key={item.id} position="relative" border="1px solid #E2E8F0" borderRadius="md" boxShadow="sm">
                <DescriptionPopover description={item.description} width="100%">
                  <AnimatedCard width="100%">
                    <PriceBadge price={item.price} />
                    <NextImage src={item.image} alt={item.name} width={300} height={200} style={{ width: '100%', height: 'auto' }} unoptimized />
                    <Box mt={2}>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text fontSize="sm">{item.notes}</Text>
                    </Box>
                  </AnimatedCard>
                </DescriptionPopover>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box width="100%" overflowX="auto" className="box-container" p={4}>
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
                  <Td>{/* eslint-disable-next-line @next/next/no-img-element */}
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
        <Box
          mt={{ base: 4, md: 'auto' }}
          bg="#EDF2F7"
          textAlign="center"
          py={2}
          width="100%"
        >
          <Text color="#4A5568">© 2025 My Garage Sale</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default GarageSalePage;
