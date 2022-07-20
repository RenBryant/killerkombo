import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {

{/* <div class="container mx-auto grid grid-cols-4 gap-4 mt-6 mb-6">
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
      </div> */}

  return (
    <div class="container mx-auto grid grid-cols-4 gap-4 mt-6 mb-6">
      
      {
        props.gameResults.map(game => (
          <div key={game.id}>

            <Link to={{
              pathname: `/GameDetails/${game.name}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
            
          </div>
        ))
      }
    </div>
  );
}

export default Results;
