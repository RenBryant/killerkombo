import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const navStyle = {
    color: 'black'
  }

  return (
    <nav>
      <p className='text-3xl font-bold underline'>Test</p>
      <ul className='nav-links'>
      <Link style={navStyle} to={'/login'}>
        <li>Login</li>
        </Link>
        <Link style={navStyle} to={'/logout'}>
        <li>Logout</li>
        </Link>
        <Link style={navStyle} to={'/topgames'}>
        <li>Top Games</li>
        </Link>
        <Link style={navStyle} to={'/search'}>
        <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;