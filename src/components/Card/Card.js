import React from 'react';
import './index.css';

export default function Card({ info }) {
  const { image, value, suit } = info;
  return (
    <div id="cardContainer">
      <img src={image} alt={value} className="cardImage" />
      <h2 className="cardTitle">{`${value} of ${suit}`}</h2>
    </div>
  );
}
