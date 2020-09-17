import React from 'react';
import {Link} from "@reach/router";

function Recipes(props) {
  let recipes = props.recipes;

  if (props.ingredient) {
    recipes = recipes.filter(element => element.ingredients.includes(props.ingredient));
  }

  return (
    <>
      <h3>Recipes</h3>
      <ul>
        {recipes.map(element => 
          <Link to={`/recipe/${element.id}`} key={element.id}><li>{element.title}</li></Link>
        )}
      </ul>
    </>
  );
}

export default Recipes;
