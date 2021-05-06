import React from 'react';
import NavLink from './NavLink';

const Nav = () => (
  <nav className="flex nav">
    <p>Math Magicians</p>
    <div>
      <NavLink name="Home" path="/" />
      <NavLink name="Calculator" path="/" />
      <NavLink name="Quote" path="/" />
    </div>
  </nav>
);

export default Nav;
