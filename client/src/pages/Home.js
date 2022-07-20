import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';

import Nav from '../Nav';
import { Link } from 'react-router-dom';

const Home = () => {


  const loggedIn = Auth.loggedIn();

  return (
    <main className='min-h-screen flex flex-col justify-between'>
      <section className='page flex-1 flex-col gap-10 lg:flex-row justify-around items-center'>
        <section className='text-text space-y-5 text-center 2xl:text-left'>
          <p className='text-base'>Are you done playing?</p>
          <h1 className='text-4xl font-semibold'>Explore and review games</h1>
          <Link to='/topgames'>
            <button className='btn btn-primary'>Top Games</button>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Home;
