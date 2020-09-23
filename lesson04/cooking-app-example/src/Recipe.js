import React from 'react';
import {Link} from "@reach/router";

function Recipe(props) {
  const id = props.id;
  const recipe = props.getRecipe(id);

  let list = recipe.ingredients.map(ingredient => 
    <li key={ingredient}><Link to={"/recipes/with/" + ingredient}>{ingredient}</Link></li>
  );

  return (
    <>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>Cooking time: {recipe.cookingTime}</p>
      <p>Ingredients:</p>
      <ul>
        {list}
      </ul>
      <Link to="/">Back</Link>
    </>
  );
}

export default Recipe;
