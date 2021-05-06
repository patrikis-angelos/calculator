import React from 'react';
import NavLink from './NavLink';

const Nav = () => (
  <nav className="flex nav">
    <h1>Math Magicians</h1>
    <div>
      <NavLink name="Home" path="/" />
      <NavLink name="Calculator" path="/calculator" />
      <NavLink name="Quote" path="/quote" />
    </div>
  </nav>
);

export default Nav;
