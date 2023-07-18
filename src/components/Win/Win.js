import React from 'react';
import './Win.css';
import Score from '../Score/Score';

export default function Win() {
  return (
    <div>
      <h2>Congratulations, You Won!</h2>
      <Score />
    </div>
  );
}
