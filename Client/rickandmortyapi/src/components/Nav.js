import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-transparent flex justify-start items-center p-3">
      <ul className="list-none flex">
        <li className="mr-4">
          <NavLink exact to="/" className="text-teal-500 font-bold" activeClassName="text-green-500 underline">Home</NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/search" className="text-teal-500 font-bold" activeClassName="text-green-500 underline">Search</NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/about" className="text-teal-500 font-bold" activeClassName="text-green-500 underline">About</NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/submit" className="text-teal-500 font-bold" activeClassName="text-green-500 underline">Submit</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;