import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }
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
<div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                </div>
                <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                </div>
                <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                    <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    {/* <!-- Remove class [ h-24 ] when adding a card block --> */}
                    {/* <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
                </div>
            
            
</>
  )
}

export default TopGames;