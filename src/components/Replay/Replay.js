import React, { useContext, useState } from 'react';
import GameContext from '../../context/GameContext';
import './Replay.css';

export default function Replay() {
  const { playAgain } = useContext(GameContext);
  const [cardsToDraw, setCardsToDraw] = useState(10);

  const handleClick = async () => {
    playAgain(cardsToDraw);
  };

  return (
    <div>
      <label>
        How many cards would you like to memorise?
        <input
          name="cardsToDraw"
          type="number"
          min="0"
          max="52"
          defaultValue={cardsToDraw}
          onChange={(e) => {
            setCardsToDraw(e.target.value);
          }}
        />
      </label>

      <button onClick={handleClick}>restart</button>
    </div>
  );
}
