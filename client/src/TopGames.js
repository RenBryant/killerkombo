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
  return (
    <>
    <div class="container mx-auto grid grid-cols-4 gap-4 mt-6 mb-6">
      {
        games.map(game => (
          <div key={game.id}>
             <Link to={{
              pathname: `/GameDetails/${game.name.split(" ").join("-")}`,
              gameProps:{
                game: game
              }
            }}>
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game"  />
              </Link>
          </div>
        ))
      }
      </div>
    </>
  );
};

// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);

export default TopGames;
