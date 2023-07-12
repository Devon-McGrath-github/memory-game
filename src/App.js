import './App.css';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <h1>Memory Card game</h1>
      <h3>
        Get points by clicking on an image. Just don't click on the same image
        twice!
      </h3>
      <Game />
    </div>
  );
}

export default App;
