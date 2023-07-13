import Card from '../Card/Card.js';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import './Game.css';
import Loading from '../Loading/Loading.js';

export default function Game() {
  const isInitialMount = useRef(true);

  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    // fetch deckId ONLY AFTER initial mount (avoids making 2 requests)
    if (isInitialMount.current === true) {
      isInitialMount.current = false;
    } else {
      const fetchDeckId = async () => {
        const response = await fetch(
          `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
        );
        const data = await response.json();
        setDeckId(data.deck_id);
      };
      fetchDeckId();
    }
  }, []);

  // useLayoutEffect(() => {
  //   // Draw cards if deckId has been retrieved or updated
  //   if (
  //     isInitialMount.current !== true &&
  //     deckId !== null &&
  //     deckId !== undefined
  //   ) {
  //     async function drawCards() {
  //       await fetch(
  //         `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`
  //       )
  //         .then((response) => response.json())
  //         .then((response) => {
  //           setCards(response.cards);
  //         })
  //         .catch((err) => console.error(err));
  //     }
  //     drawCards();
  //   }
  // }, [deckId]);

  return (
    <>
      <div className="gameContainer">
        {cards !== null && cards !== undefined ? (
          cards.map((card) => <Card info={card} key={card.code} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
