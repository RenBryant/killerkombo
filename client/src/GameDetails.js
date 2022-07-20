import React from "react";
const GameDetail = (props) => {
  const { game } = props.location.gameProps;

  return (
    <div class="container mx-auto mt-6">
      <h1 className="font-medium leading-tight text-5xl">{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genre(s):</h3>
      {game.genres.map((g) => (<label>{g.name} |</label>))}

      <h3>Platform(s):</h3>
      {game.platforms.map((p) => `${p.platform.name} | `)}

      <div class="container mx-auto grid grid-cols-4 gap-4 mt-6 mb-6">
        {game.short_screenshots.map((ss) => (
          <div>
            <img src={ss.image} alt="screenshot"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDetail;
