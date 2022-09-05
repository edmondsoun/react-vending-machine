import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/candy">Candy</Link></li>
      <li><Link to="/soda">Soda</Link></li>
      <li><Link to="/chips">Chips</Link>
      </li>
    </ul>
  );
}

export default Nav;