import React from 'react';
import './Card.css';

console.log('Add image back to Card.js');
export default function Card({ info }) {
  // removed image while testing/developing
  const { value, suit } = info;
  // const { image, value, suit } = info;
  return (
    <div id="cardContainer">
      {/* <img src={image} alt={value} className="cardImage" /> */}
      <h2 className="cardTitle">{`${value} of ${suit}`}</h2>
    </div>
  );
}
