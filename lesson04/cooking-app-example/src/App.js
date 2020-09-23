import React, {useState} from 'react';
import {Router} from "@reach/router";

import recipeData from './recipes.json';

import Recipes from './Recipes';
import Recipe from './Recipe';

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  function getRecipe(id) {
    const recipe = recipes.find(element => element.id === parseInt(id));
    return recipe;
  }

  return (
    <>
      <h1>Cooking App</h1>
      <Router>
          <Recipes path="/" recipes={recipes}/>
          <Recipes path="/recipes/with/:filter" recipes={recipes}/>
          <Recipe path="/recipe/:id" getRecipe={getRecipe}/>
      </Router>
    </>
  );
}

export default App;
