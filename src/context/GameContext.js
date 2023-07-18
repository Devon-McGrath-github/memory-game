import React, { createContext } from 'react';
import { useActions } from '../hooks/useGameActions.js';

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { score, cards, handleCardSelection } = useActions();

  return (
    <GameContext.Provider
      value={{
        score,
        cards,
        handleCardSelection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
