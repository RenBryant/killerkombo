import React from 'react';
import { Link } from 'react-router-dom';
import favicon from "./assets/favicon.ico";
const Nav = () => {

  const navStyle = {
    color: 'black'
  }

  return (
    <header className="bg-gray-900">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-24">
          <div className="md:flex md:items-center md:gap-14">
            <a className="block text-teal-300" href="/">
              <span className="sr-only">Home</span>
              <img src={favicon} alt='remote control'>

              </img>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-labelledby="header-navigation ">
              <h2 className="sr-only" id="header-navigation">Header navigation</h2>

              <ul className="nav-links flex items-center gap-6 text-[2rem]">

                <Link style={navStyle} to={'/topgames'}>
                  <li>
                    <a className="text-white transition hover:text-white/75" href='/'>
                      Top Games
                    </a>
                  </li>
                </Link>

                <Link style={navStyle} to={'/search'}>
                  <li>
                    <a className="text-white transition hover:text-white/75" href='/'>
                      Search
                    </a>
                  </li>
                </Link>

                <Link style={navStyle} to={'/about'}>
                  <li>
                    <a className="text-white transition hover:text-white/75" href='/'>
                      About
                    </a>
                  </li>
                </Link>

                <Link style={navStyle} to={'/contact'}>
                  <li>
                    <a className="text-white transition hover:text-white/75" href='/'>
                      Contact
                    </a>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>


          <div className="flex items-center gap-4">
            <div className="sm:gap-4 sm:flex">

              <Link style={navStyle} to={'/login'}>
                <a
                  className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                  href="/"
                >
                  Login
                </a>
              </Link>

              <div className="hidden sm:flex">
                <Link style={navStyle} to={'/signup'}>
                  <a
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md"
                    href="/"
                  >
                    Signup
                  </a>
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="p-2 text-white transition bg-gray-800 rounded hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

export default Nav;