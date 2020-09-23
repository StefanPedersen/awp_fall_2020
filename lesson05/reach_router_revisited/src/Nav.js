import React from 'react';
import { Link } from "@reach/router";

function Nav() {
  const data = ["melon", "peach", "pineapple"];
  
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/secret-list" state={{ data: data, hello: "hi" }}>Secret list</Link></li>
    </ul>
  );
}

export default Nav;
