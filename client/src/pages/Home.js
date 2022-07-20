import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
 // <main className='min-h-screen flex flex-col justify-between'>
    //   <section className='page flex-1 flex-col gap-10 lg:flex-row justify-around items-center'>
    //     <section className='text-text space-y-5 text-center 2xl:text-left'>
    //       <p className='text-base'>Are you done playing?</p>
    //       <h1 className='text-4xl font-semibold'>Explore and review games</h1>
    //       <Link to='/topgames'>
    //         <button className='btn btn-primary'>Top Games</button>
    //       </Link>
    //     </section>
    //   </section>
    // </main>
const Home = () => {


  const loggedIn = Auth.loggedIn();
 return (
    <section className='bg-[#1b2838]'>
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
        >
          
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">Grow your audience</h2>
  
          <p className="mt-4 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
            veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>
  
          <a
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span className="text-sm font-medium"> Get Started </span>
          <div>
          
          </div>
            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;
