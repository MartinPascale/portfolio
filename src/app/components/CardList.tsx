import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card';
import { InfoOutlineIcon, PhoneIcon } from '@chakra-ui/icons';

interface Card {
  id: number;
  content: string;
  icon: JSX.Element;
}

interface CardListProps {
  cards: Card[];
  selectedCardId: number | null;
  handleSelectCard: (id: number) => void;
  handleMoveCard: (dragIndex: number, hoverIndex: number) => void;
}

const CardList: React.FC<CardListProps> = ({
  cards,
  selectedCardId,
  handleSelectCard,
  handleMoveCard,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        py={5}
        px={10}
        w="100%"
        gap={2}
        maxW={{ base: '100%', md: '1200px' }}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            content={card.content}
            index={index}
            moveCard={handleMoveCard}
            isSelected={card.id === selectedCardId}
            onSelect={handleSelectCard}
            icon={card.icon}
          />
        ))}
      </Box>
    </DndProvider>
  );
};

export default CardList;
