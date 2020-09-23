import React from 'react';
import { Link, useLocation } from "@reach/router";

function FruitList(props) {
  const location = useLocation();

  let data = ["apples", "bananas", "oranges"];
  if (location.state.data) {
    data = location.state.data;
  }

  return (
    <div className="background-blue">
      <h1>Home</h1>
      <ul>
        {data.map(fruit =>
          <li key={fruit}>
            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default FruitList;
