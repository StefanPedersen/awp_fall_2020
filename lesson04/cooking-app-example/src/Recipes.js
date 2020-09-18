import React from 'react';
import {Link} from "@reach/router";

function Recipes(props) {
  let recipes = props.recipes;

  let mapFunction = element => 
    <Link to={`/recipe/${element.id}`} key={element.id}>
      <li>{element.title}</li>
    </Link>;

  let list = recipes.map(mapFunction);

  return (
    <>
      <h3>Recipes</h3>
      <ul>
        {list}
      </ul>
    </>
  );
}

export default Recipes;
