import React from 'react';
import './GameOver.css';
import Replay from '../Replay/Replay';

export default function GameOver() {
  return (
    <div>
      <h2>You lost, better luck next time!</h2>
      <Replay />
    </div>
  );
}
