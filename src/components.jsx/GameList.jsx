import propTypes from "prop-types";
import "../css/GameList.css";

const GameList = ({ games }) => {
  return (
    <div>
      <h2 className="title-list">Game List</h2>
      <ul className="game-list">
        {games.map((game) => (
          <li className="game-list-item" key={game.id}>
            <strong>{game.title}</strong> ({game.providerName})
            <br />
            <img src={game.thumb?.url} alt={game.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
// Using the propTypes
GameList.propTypes = {
  games: propTypes.array.isRequired,
};
export default GameList;
