import './App.css';
import Game from './components/Game/Game';
import Score from './components/Score/Score';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Memory Card game</h1>
        <Score />
      </div>

      <Game />
    </div>
  );
}

export default App;
