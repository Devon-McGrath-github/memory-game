import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';

export default function Score() {
  const { score } = useContext(GameContext);

  return (
    <div>
      <h3>Current Score: {score.currentScore}</h3>
      <h3>High Score: {score.highScore}</h3>
    </div>
  );
}
