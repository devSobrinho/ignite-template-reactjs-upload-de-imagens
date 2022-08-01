import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleViewImage(url: string): void {
    onOpen();
    setCurrentImageUrl(url);
  }

  return (
    <>
      {/* TODO CARD GRID */}
      {/* <SimpleGrid gap="40px" gridColumn={3}> */}
      <SimpleGrid gap="40px" columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          <Card
            key={card.id}
            data={{
              title: card.title,
              description: card.description,
              url: card.url,
              ts: card.ts,
            }}
            // eslint-disable-next-line react/jsx-no-bind
            viewImage={handleViewImage}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      {currentImageUrl && (
        <ModalViewImage
          isOpen={isOpen}
          imgUrl={currentImageUrl}
          onClose={onClose}
        />
      )}
    </>
  );
}
