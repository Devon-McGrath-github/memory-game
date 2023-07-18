import { useEffect, useState, useReducer } from 'react';

const INITIAL_SCORE = {
  currentScore: 0,
  highScore: 0,
};

const reducer = (score, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        ...score,
        currentScore: score.currentScore + 1,
        highScore:
          score.highScore < score.currentScore + 1
            ? score.currentScore + 1
            : score.highScore,
      };

    case 'RESTART':
      return {
        ...score,
        currentScore: 0,
      };

    default:
      return score;
  }
};

const useActions = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState(null);
  const [score, dispatch] = useReducer(reducer, INITIAL_SCORE);

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

  function handleCardSelection(card) {
    if (!selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
      dispatch({ type: 'ADD_SCORE' });
    } else {
      dispatch({ type: 'RESTART' });
      setSelectedCards([]);
    }
  }

  return {
    score,
    cards,
    handleCardSelection,
  };
  // should be returning:
  /* 
    shuffle cards?
    gameOver?
  */
};

export { useActions };
