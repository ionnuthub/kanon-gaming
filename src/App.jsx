import GameList from "./components/GameList";
import games from "./game-data.json";

function App() {
  return (
    <div className="app">
      <GameList games={games} />
    </div>
  );
}

export default App;
