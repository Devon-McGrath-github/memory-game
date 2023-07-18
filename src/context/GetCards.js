import React, { useState } from 'react';

function getCards() {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const fetchDeckId = async () => {
      const response = await fetch(
        `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
      );
      const data = await response.json();
      setDeckId(data.deck_id);
    };
    fetchDeckId();
  }, []);

  useEffect(() => {
    async function drawCards() {
      await fetch(
        `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`
      )
        .then((response) => response.json())
        .then((response) => {
          setCards(response.cards);
        })
        .catch((err) => console.error(err));
    }
    drawCards();
  }, [deckId]);

  return (
    
  )
}

export default cards;
