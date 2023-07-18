import Card from '../Card/Card.js';
import React, { useContext } from 'react';
import './Game.css';
import Loading from '../Loading/Loading.js';
import GameContext from '../../context/GameContext.js';
import GameOver from '../GameOver/GameOver.js';
import Win from '../Win/Win.js';

export default function Game() {
  const { isGameOver, isGameWon, cards } = useContext(GameContext);

  return (
    <>
      {isGameOver !== true ? (
        <div className="gameContainer">
          {cards !== null && cards !== undefined ? (
            cards.map((card) => <Card info={card} key={card.code} />)
          ) : (
            <Loading />
          )}
        </div>
      ) : isGameWon === true ? (
        <Win />
      ) : (
        <GameOver />
      )}
    </>
  );
}
