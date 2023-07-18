import React, { useContext } from 'react';
import './GameOver.css';
import Replay from '../Replay/Replay';
import Win from './Win/Win';
import Loss from './Loss/Loss';
import GameContext from '../../context/GameContext';

export default function GameOver() {
  const { isGameWon } = useContext(GameContext);
  return (
    <div>
      {isGameWon === true ? <Win /> : <Loss />}
      <Replay />
    </div>
  );
}
