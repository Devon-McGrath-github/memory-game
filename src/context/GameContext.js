import React, { createContext } from 'react';
import gameActions from '../hooks/gameActions';

const INITIAL_SCORE = {
  currentScore: 0,
  highScore: 0,
};

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { currentScore, highScore } = INITIAL_SCORE;
  const { handleCardSelection } = gameActions();

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
