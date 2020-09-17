import React, {useState} from 'react';
import {Link} from "@reach/router";

function Recipe(props) {
  const id = props.id;
  const recipe = props.getRecipe(id);

  return (
    <>
      <h3>{recipe.title}</h3>
        
      <p>{recipe.description}</p>

      <Link to="/">Back</Link>
    </>
  );
}

export default Recipe;
