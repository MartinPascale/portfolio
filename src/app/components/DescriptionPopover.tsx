'use client';
import { ReactNode } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Box,
  BoxProps,
} from '@chakra-ui/react';

interface DescriptionPopoverProps extends BoxProps {
  description: string;
  children: ReactNode;
}

export default function DescriptionPopover({ description, children, ...rest }: DescriptionPopoverProps) {
  return (
    <Popover placement="top" trigger="hover">
      <PopoverTrigger>
        <Box display="inline-block" {...rest}>
          {children}
        </Box>
      </PopoverTrigger>
      <PopoverContent color="black">
        <PopoverArrow />
        <PopoverBody>{description}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
