import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';

export default function Score() {
  const { currentScore, highScore } = useContext(GameContext);

  return (
    <div>
      <h3>Current Score: {currentScore}</h3>
      <h3>High Score: {highScore}</h3>
    </div>
  );
}
