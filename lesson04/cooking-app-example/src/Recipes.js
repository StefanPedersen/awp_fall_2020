import React from 'react';
import {Link} from "@reach/router";

function Recipes(props) {
  let recipes = props.recipes;
  const filter = props.filter;

  if (filter) {
   recipes = recipes.filter(recipe => recipe.ingredients.includes(filter));
  }

  const mapFunction = element => 
    <Link to={`/recipe/${element.id}`} key={element.id}>
      <li>{element.title}</li>
    </Link>;

  const list = recipes.map(mapFunction);

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
