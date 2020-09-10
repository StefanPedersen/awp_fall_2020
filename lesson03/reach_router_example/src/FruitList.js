import React from 'react';
import { Link } from "@reach/router";

function FruitList(props) {
  return (
    <div className="background-blue">
      <h1>Home</h1>
      <ul>
        {["apples", "bananas", "oranges"].map(fruit =>
          <li>
            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default FruitList;
