import React, { createContext } from 'react';
import { useActions } from '../hooks/useGameActions.js';

const INITIAL_SCORE = {
  currentScore: 0,
  highScore: 0,
};

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { currentScore, highScore } = INITIAL_SCORE;
  const { handleCardSelection } = useActions();

  return (
    <GameContext.Provider
      value={{
        currentScore,
        highScore,
        handleCardSelection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
