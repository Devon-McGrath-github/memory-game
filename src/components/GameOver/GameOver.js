import React, { useContext, useState } from 'react';
import './GameOver.css';
import GameContext from '../../context/GameContext';

export default function GameOver() {
  const { playAgain } = useContext(GameContext);
  const [cardsToDraw, setCardsToDraw] = useState(6);

  const handleClick = async () => {
    playAgain(cardsToDraw);
  };
  // const
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
