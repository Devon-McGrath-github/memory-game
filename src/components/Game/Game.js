import Card from '../Card/Card.js';
import React, { useEffect, useState, useRef } from 'react';
import './index.css';

// Dummy Data
/* const cards = [
  {
    id: 1,
    title: 'FIRST',
    image: 'https://blackroses.cards/cdn/shop/products/ks2.jpg?v=1661168336',
  },
  {
    id: 2,
    title: 'King of Hearts',
    image: 'https://www.deckofcardsapi.com/static/img/KH.png',
  },
  {
    id: 3,
    title: 'Eight of Clubs',
    image: 'https://www.deckofcardsapi.com/static/img/8C.png',
  },
]; */

export default function Game() {
  const isInitialMount = useRef(true);
  let [deckId, setDeckId] = useState(null);

  const [cards, setCards] = useState(null);

  const fetchDeckId = async () => {
    console.log('fetchDeckId called');
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    const data = await response.json();
    setDeckId(data.deck_id);
  };

  async function drawCards() {
    console.log('drawCards function called, to deckId: ' + deckId);
    await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`
    )
      .then((response) => response.json())
      .then((response) => {
        setCards(response.cards);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetchDeckId();
    }
  }, []);

  if (deckId !== null && cards === null) {
    console.log('drawCards function');
    drawCards();
    // console.log('ran');
  }
  // useEffect((drawCards) => {
  //   console.log('------------------');
  //   console.log('Deck Id has been updated');
  //   console.log(deckId);
  //   drawCards();
  // }, [deckId]);

  return (
    <>
      <div className="gameContainer">
        {cards !== null
          ? cards.map((card) => <Card info={card} key={card.code} />)
          : 'No Cards Provided'}
      </div>
    </>
  );
}
