import GameList from "./features/games/GameList";
import games from "./game-data.json";
import Title from "./components.jsx/Title";

function App() {
  return (
    <>
      <nav></nav>
      <header>
        <Title />
      </header>
      <main>
        <div className="app">
          <GameList games={games} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
