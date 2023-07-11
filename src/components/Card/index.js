import React from 'react';
import './index.css';

export default function Card({ info }) {
  const { image, title } = info;
  return (
    <div id="cardContainer">
      <img src={image} alt={title} className="cardImage" />
      <h2 className="cardTitle">{title}</h2>
    </div>
  );
}
