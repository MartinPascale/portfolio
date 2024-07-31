// pages/index.tsx
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  const [cards, setCards] = useState([
    { id: 1, content: 'React♥️' },
    { id: 2, content: 'TypeScript♣️' },
    { id: 3, content: 'AWS♦️' },
    { id: 4, content: 'Node♣️' },
    { id: 5, content: 'Next♥️' },
  ]);

  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const newCards = [...cards];
    const [removed] = newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, removed);
    setCards(newCards);
  };

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id === selectedCardId ? null : id);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box display="flex" justifyContent="center" alignItems="center" p={5}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            content={card.content}
            index={index}
            moveCard={moveCard}
            isSelected={card.id === selectedCardId}
            onSelect={handleSelectCard}
          />
        ))}
      </Box>
    </DndProvider>
  );
};

export default HomePage;
