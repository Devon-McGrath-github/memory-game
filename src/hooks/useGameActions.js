import { useState, useReducer } from 'react';

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
  const [score, dispatch] = useReducer(reducer, INITIAL_SCORE);

  function handleCardSelection(card) {
    if (!selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
      dispatch({ type: 'ADD_SCORE' });
    } else {
      console.log('you lost');
      dispatch({ type: 'RESTART' });
    }
    console.log(selectedCards);
    console.log(selectedCards.includes(card));
  }

  return {
    score,
    handleCardSelection,
  };
};

export { useActions };
