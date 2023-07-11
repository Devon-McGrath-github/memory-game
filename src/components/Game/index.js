import Card from '../Card/index.js';
import React from 'react';
import './index.css';

const cards = [
  {
    id: 1,
    title: 'FIRST',
    image: 'https://blackroses.cards/cdn/shop/products/ks2.jpg?v=1661168336',
  },
  {
    id: 2,
    title: 'SECOND',
    image: 'https://blackroses.cards/cdn/shop/products/ks2.jpg?v=1661168336',
  },
  {
    id: 3,
    title: 'THIRD',
    image: 'https://blackroses.cards/cdn/shop/products/ks2.jpg?v=1661168336',
  },
];

export default function Game() {
  return (
    <div className="gameContainer">
      {cards.length > 0
        ? cards.map((card) => <Card info={card} key={card.id} />)
        : 'No Cards Provided'}
    </div>
  );
}
