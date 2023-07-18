import React, { createContext } from 'react';
import { useActions } from '../hooks/useGameActions.js';

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { score, cards, handleCardSelection, isGameOver, isGameWon, playAgain } =
    useActions();

  return (
    <GameContext.Provider
      value={{
        score,
        cards,
        handleCardSelection,
        isGameOver,
        isGameWon,
        playAgain,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
