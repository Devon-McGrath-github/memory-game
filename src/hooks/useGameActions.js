import { useEffect, useState, useReducer } from 'react';

const INITIAL_SCORE = {
  currentScore: 0,
  highScore: 0,
};
const DEFAULT_NUMBER_OF_CARDS = 2;

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

// fisher-Yates Shuffle algorithm
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const useActions = () => {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, dispatch] = useReducer(reducer, INITIAL_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  // grab a deck ID from API
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

  const drawCards = async (deckId, numberOfCards) => {
    await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`
    )
      .then((response) => response.json())
      .then((response) => {
        setCards(response.cards);
      })
      .catch((err) => console.error(err));
  };
  // Whenever deckId changes, Draw cards from API
  useEffect(() => {
    if (deckId !== null && deckId !== undefined) {
      drawCards(deckId, DEFAULT_NUMBER_OF_CARDS);
    }
  }, [deckId]);

  function restartGame() {
    dispatch({ type: 'RESTART' });
    setSelectedCards([]);
  }

  function checkWin(score) {
    // check if current score + new card chosen is the max possible score
    if (score >= cards.length) {
      setIsGameWon(true);
      restartGame();
    }
  }

  // when a card is selected determine win/loss and adjust scores accordingly
  function handleCardSelection(card) {
    // if card has NOT already been selected
    if (!selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
      dispatch({ type: 'ADD_SCORE' });
      checkWin(score.currentScore + 1);
      shuffle(cards);
    } else {
      setIsGameOver(true);
      restartGame();
    }
  }

  function playAgain(numberOfCards) {
    drawCards(deckId, numberOfCards);
    setIsGameOver(false);
    setIsGameWon(false);
  }

  return {
    score,
    cards,
    handleCardSelection,
    isGameOver,
    isGameWon,
    playAgain,
  };
};

export { useActions };
