import './App.css';
import Game from './components/Game/Game';
import Score from './components/Score/Score';
import { GameContextProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <div className="header">
          <div className="headingText">
            <h1>Memory Card game</h1>
            <h3>
              Click on cards to earn points, but don't click the same card
              twice!
            </h3>
          </div>

          <Score />
        </div>

        <Game />
      </GameContextProvider>
    </div>
  );
}

export default App;
