import GameList from "./components.jsx/GameList";
import games from "./game-data.json";

function App() {
  return (
    <div className="app">
      <GameList games={games} />
    </div>
  );
}

export default App;
