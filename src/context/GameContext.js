import React, { createContext } from 'react';
import { useActions } from '../hooks/useGameActions.js';

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const { score, handleCardSelection } = useActions();

  return (
    <GameContext.Provider
      value={{
        score,
        handleCardSelection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
