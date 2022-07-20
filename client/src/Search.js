import React, { useState } from "react";
import Results from "./Results";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLowerCase();

    setGameResults([]);
    fetch(`/api/search/:game${slug}`)
      .then((resp) => resp.json())
      .then(({ results }) => {
        results === undefined
          ? alert("no games found")
          : setGameResults(results);
      });
    setSearchTerm("");
  };
  // <div className="game-search">
  //   <h1>Game Search</h1>
  //     <form onSubmit={onSubmit}>
  //       <input type="text" value={searchTerm} onChange={handleChange}/>
  //       <br></br>
  //       <input type="submit"/>
  //     </form>
  //     <Results gameResults={gameResults} />
  // </div>
  return (
    <div className="container mx-auto game-search mt-6">
      <h1 className="text-xl">Game Search</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2 mt-2
      "
          id="exampleFormControlInput1"
          value={searchTerm}
          onChange={handleChange}
        />
        
      <input type="submit" className="mb-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"/>
        
      </form>
      <Results gameResults={gameResults} />
    </div>
    // <div class="max-w-xl mx-auto text-center py-9">
    //   <h2 class="text-2xl font-bold sm:text-3xl">Create a team</h2>

    //   <p class="mx-auto mt-4 text-gray-500">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente modi
    //     suscipit est ipsum qui nulla.
    //   </p>
    //   {/* Search  */}
    //   <div class="flex justify-center">
    //     <div class="mb-3 xl:w-96">
    //       <div class="input-group relative flex flex-wrap items-stretch  mb-4">
    //         <input> search </input>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Search;
