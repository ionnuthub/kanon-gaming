import  { useState } from 'react';
import './GameList.css'
import propTypes from 'prop-types'; // Import propTypes



const GameList = ({ games }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the games based on the search query
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.providerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="title-list">Game List</h2>
      <input
       style={{ padding: "10px", margin: "10px 0"}}
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="game-list">
        {filteredGames.map((game) => (
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


GameList.propTypes = {
  games: propTypes.array.isRequired,
};

export default GameList;






// src/components/GameList.js

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSearchQuery } from ./GameListSlice;

// const GameList = () => {
//   const gameList  = useSelector((state) => state.gameList);
//   const searchQuery = useSelector((state) => state.searchQuery);
//   const dispatch = useDispatch();

//   // Filter the games based on the search query
//   const filteredGames = gameList.filter((game) =>
//     game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     game.providerName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <h2 className="title-list">Game List</h2>
//       <input
//         type="text"
//         placeholder="Search games..."
//         value={searchQuery}
//         onChange={(e) => dispatch(setSearchQuery(e.target.value))}
//       />
//       <ul className="game-list">
//         {filteredGames.map((game) => (
//           <li className="game-list-item" key={game.id}>
//             <strong>{game.title}</strong> ({game.providerName})
//             <br />
//             <img src={game.thumb?.url} alt={game.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GameList;