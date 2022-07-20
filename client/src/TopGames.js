import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopGames = () => {
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch("https://rawg.io/api/collections/must-play/games")
      .then((resp) => resp.json())
      .then(({ results }) => setGames(results));
  };
  // <div>
  //   <ul>
  //   {
  //     games.map(game => (
  //       <li key={game.id}>
  //         <Link to={{
  //             pathname: `/game/${game.name}`,
  //             gameProps:{
  //               game: game
  //             }
  //           }}>
  //         <h3>{game.name}</h3>
  //         <img src={game.background_image} alt="game"/>
  //         </Link>
  //       </li>
  //     ))
  //   }
  //   </ul>
  // </div>
  
  const gameURL = name => {
    const str = name.split(" ");
    let result = [];
    
    str.forEach((word, index) => {
      word.replace(/[^a-zA-Z0-9 ]/g, '');
      console.log(word);
      result.push(word);
    });

    let globalURL = "https://rawg.io/games/";

    return globalURL + result.join("-");
  }


  return (
    <>
    <div class="container mx-auto grid grid-cols-4 gap-4 mt-6 mb-6">
      {
        games.map(game => (
          <div>
            <a href={gameURL(game.name)} target="_blank">
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game"  />
            </a>
          </div>
        ))
      }
      </div>
    </>
  );
};

export default TopGames;
