import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
<form onSubmit={handleFormSubmit} >
<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        value={formState.email}
                        onChange={handleChange}
                      />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        value={formState.password}
                        onChange={handleChange}
                        />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-teal-600 hover:bg-teal-300 focus:outline-none my-1">
                          Create Account
                    </button>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/login/">
                        Log in
                    </a>
                </div>
            </div>

            {error && <div>
                <h3>Signup failed</h3>
              </div>}
        </form>

  );
};

export default Signup;
  //   <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
  //     <div className="md:flex md:items-center mb-6">
  //       <div className="md:w-1/3">
  //         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
  //           Email
  //         </label>
  //       </div>
  //       <div className="md:w-2/3">
  //         <input 
  //           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
  //           value={formState.email}
  //           onChange={handleChange}
  //           name='email'
  //         />
  //       </div>
  //     </div>
      
  //     <div className="md:flex md:items-center mb-6">
  //       <div className="md:w-1/3">
  //         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
  //           Password
  //         </label>
  //       </div>
  //       <div className="md:w-2/3">
  //         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" onChange={handleChange} name='password' />
  //       </div>
      
  //     </div>
  //     {/* <div className="md:flex md:items-center mb-6">
  //       <div className="md:w-1/3"></div>
  //       <label className="md:w-2/3 block text-gray-500 font-bold">
  //         <input className="mr-2 leading-tight" type="checkbox" />
  //       </label>
      
  //     </div> */}
  //     <div className="md:flex md:items-center">
  //       <div className="md:w-1/3"></div>
  //       <div className="md:w-2/3">
  //         <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
  //           Sign Up
  //         </button>
  //       </div>
  //     </div>
  // </form>