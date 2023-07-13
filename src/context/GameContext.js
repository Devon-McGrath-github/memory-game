import React, { createContext } from 'react';

const INITIAL_SCORE = {
  currentScore: 0,
  highScore: 0,
};

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { currentScore, highScore } = INITIAL_SCORE;

  return (
    <GameContext.Provider
      value={{
        currentScore,
        highScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
