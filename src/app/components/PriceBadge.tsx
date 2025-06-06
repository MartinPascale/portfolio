'use client';
import { Box, Text, BoxProps } from '@chakra-ui/react';

interface PriceBadgeProps extends BoxProps {
  price: string;
}

export default function PriceBadge({ price, ...rest }: PriceBadgeProps) {
  return (
    <Box
      position="absolute"
      top="-8px"
      left="50%"
      transform="translateX(-50%)"
      bg="black"
      color="yellow"
      px={2}
      py={1}
      borderRadius="md"
      fontWeight="bold"
      fontSize="sm"
      {...rest}
    >
      <Text fontSize="inherit">{price}</Text>
    </Box>
  );
}
