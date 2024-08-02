'use client';
import { Box, Heading, List, Text } from '@chakra-ui/react';
import { useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import AboutCardList from '../components/CardList';
import { infoCards, profileInfoContent } from '@/constants/profileInfo';

const defaultSelectedCardId: number = 1;

const AboutPage = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(
    defaultSelectedCardId,
  );
  const [cards, setCards] = useState(infoCards);

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
    <Box>
      <Box className="box-container" height="500px">
        <Box className="box-header">
          <AnimatedText
            className="header-text"
            fontSize="2xl"
            text={
              selectedCardId
                ? cards.find((card) => card.id === selectedCardId)?.content ||
                  'About Me'
                : 'About Me'
            }
            duration={3}
            amplitude={8}
            delay={0.8}
          />
        </Box>
        <Box
          className="box-content"
          h="100%"
          overflowY="auto"
          height="calc(100% - 80px)"
          style={{
            scrollbarWidth: 'thin',
          }}
        >
          <Box mt={6} display="flex" flexDir="column">
            {selectedCardId && profileInfoContent[selectedCardId]}
            {!selectedCardId && (
              <Box mt={2} w="100%">
                <Text
                  fontSize="4xl"
                  sx={{
                    padding: 2,
                    backgroundColor: '#13599c',
                    borderRadius: '10px',
                    color: 'white',
                    border: '4px solid #4d8cc1',
                  }}
                >
                  Chose a card to learn more details about it 👇
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        left={0}
        bottom="-40px"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <AboutCardList
          cards={cards}
          selectedCardId={selectedCardId}
          handleSelectCard={handleSelectCard}
          handleMoveCard={moveCard}
        />
      </Box>
    </Box>
  );
};

export default AboutPage;
