import React, { useState } from 'react';
import Results from './Results';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`/api/search/:game${slug}`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }
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
    <div class="max-w-xl mx-auto text-center py-9">
    <h2 class="text-2xl font-bold sm:text-3xl">Create a team</h2>
  
    <p class="mx-auto mt-4 text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente modi
      suscipit est ipsum qui nulla.
    </p>
    {/* Search  */}
    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch  mb-4">
      <input> search </input>
    </div>
  </div>
</div>
  </div>
  );
}

export default Search;