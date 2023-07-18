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
  const [selectedCards, setSelectCards] = useState([]);
  const [score, dispatch] = useReducer(reducer, INITIAL_SCORE);

  function handleCardSelection(card) {
    if (selectedCards.includes(card)) {
      console.log('you lost');
    } else {
      setSelectCards(card);
      dispatch({ type: 'ADD_SCORE' });
    }
  }

  return {
    score,
    handleCardSelection,
  };
};

export { useActions };
