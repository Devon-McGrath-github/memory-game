import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import './Card.css';

export default function Card({ info }) {
  const { image, value, suit, code } = info;
  const { handleCardSelection } = useContext(GameContext);

  const handleClick = async () => {
    handleCardSelection(code);
  };

  return (
    <div id="cardContainer" onClick={handleClick}>
      <img src={image} alt={value} className="cardImage" />
      <h2 className="cardTitle">{`${value} of ${suit}`}</h2>
    </div>
  );
}
