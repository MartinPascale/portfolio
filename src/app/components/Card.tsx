// components/Card.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useDrag, useDrop } from 'react-dnd';

interface CardProps {
  id: number;
  content: string;
  index: number;
  icon: JSX.Element;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const MotionBox = motion(Box);

const Card: React.FC<CardProps> = ({
  id,
  content,
  icon,
  index,
  moveCard,
  isSelected,
  onSelect,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: { id: number; index: number }) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const rotation = (index - 2) * 5;
  const yPosition = isSelected ? index - 30 : index % 2 === 0 ? 10 : -10;

  return (
    <MotionBox
      ref={ref}
      onClick={() => onSelect(id)}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: 'move',
        border: isSelected ? '2px solid #4d8cc1' : '2px solid grey',
        translateY: yPosition,
        zIndex: isSelected ? 1 : 0,
        scale: isSelected ? 1.2 : 1,
        rotate: rotation,
        transition: 'transform 0.2s ease-in',
      }}
      whileHover={{ rotate: rotation - 5 }}
      p={4}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      h={{ base: '160px', md: '260px' }}
      w={{ base: '75px', md: 'unset' }}
      flex={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box color="#444" fontSize="xl" pos="absolute" right="16px" top="16px">
        {icon}
      </Box>
      <Text fontSize="2xl">{content}</Text>
    </MotionBox>
  );
};

export default Card;
