import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card';

interface Card {
  id: number;
  content: string;
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
      <Box display="flex" justifyContent="center" alignItems="center" p={5}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            content={card.content}
            index={index}
            moveCard={handleMoveCard}
            isSelected={card.id === selectedCardId}
            onSelect={handleSelectCard}
          />
        ))}
      </Box>
    </DndProvider>
  );
};

export default CardList;
