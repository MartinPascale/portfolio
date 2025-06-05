'use client';
import { InfoIcon } from '@chakra-ui/icons';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';

interface DescriptionPopoverProps extends Omit<IconButtonProps, 'aria-label'> {
  description: string;
}

export default function DescriptionPopover({ description, ...rest }: DescriptionPopoverProps) {
  return (
    <Popover placement="top" trigger="hover">
      <PopoverTrigger>
        <IconButton
          aria-label="Show description"
          icon={<InfoIcon />}
          size="sm"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.600' }}
          {...rest}
        />
      </PopoverTrigger>
      <PopoverContent color="black">
        <PopoverArrow />
        <PopoverBody>{description}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
