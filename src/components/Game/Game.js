import Card from '../Card/Card.js';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import './index.css';

// Dummy Data
/* const cards = 
[
  {
    "code": "9S",
    "image": "https://deckofcardsapi.com/static/img/9S.png",
    "images": {
      "svg": "https://deckofcardsapi.com/static/img/9S.svg",
      "png": "https://deckofcardsapi.com/static/img/9S.png"
    },
    "value": "9",
    "suit": "SPADES"
  },
  {
    "code": "QD",
    "image": "https://deckofcardsapi.com/static/img/QD.png",
    "images": {
      "svg": "https://deckofcardsapi.com/static/img/QD.svg",
      "png": "https://deckofcardsapi.com/static/img/QD.png"
    },
    "value": "QUEEN",
    "suit": "DIAMONDS"
  },
  {
    "code": "KS",
    "image": "https://deckofcardsapi.com/static/img/KS.png",
    "images": {
      "svg": "https://deckofcardsapi.com/static/img/KS.svg",
      "png": "https://deckofcardsapi.com/static/img/KS.png"
    },
    "value": "KING",
    "suit": "SPADES"
  },
  {
    "code": "0D",
    "image": "https://deckofcardsapi.com/static/img/0D.png",
    "images": {
      "svg": "https://deckofcardsapi.com/static/img/0D.svg",
      "png": "https://deckofcardsapi.com/static/img/0D.png"
    },
    "value": "10",
    "suit": "DIAMONDS"
  },
  {
    "code": "QC",
    "image": "https://deckofcardsapi.com/static/img/QC.png",
    "images": {
      "svg": "https://deckofcardsapi.com/static/img/QC.svg",
      "png": "https://deckofcardsapi.com/static/img/QC.png"
    },
    "value": "QUEEN",
    "suit": "CLUBS"
  },
  {
    "code": "5D",
    "image": "https://deckofcardsapi.com/static/img/5D.png",
    "images": {
      "svg": "https://deckofcardsapi.com/static/img/5D.svg",
      "png": "https://deckofcardsapi.com/static/img/5D.png"
    },
    "value": "5",
    "suit": "DIAMONDS"
  }
] */

export default function Game() {
  const isInitialMount = useRef(true);
  let [deckId, setDeckId] = useState(null);

  const [cards, setCards] = useState(null);

  useEffect(() => {
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

  useLayoutEffect(() => {
    if (
      isInitialMount.current !== true &&
      deckId !== null &&
      deckId !== undefined
    ) {
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
    }
  }, [deckId]);

  return (
    <>
      <div className="gameContainer">
        {cards !== null && cards !== undefined ? (
          cards.map((card) => <Card info={card} key={card.code} />)
        ) : (
          <h2 className="loadingText">loading ...</h2>
        )}
      </div>
    </>
  );
}
