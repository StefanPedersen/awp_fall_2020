import React, {useState, useEffect} from 'react';
import {Router} from "@reach/router";

//import recipeData from './recipes.json';

import Recipes from './Recipes';
import Recipe from './Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      const url = "https://krdo-cooking-api.herokuapp.com/api/cooking";
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    }; 
    fetchData();
  }, []); 

  function getRecipe(id) {
    const recipe = recipes.find(element => element.id === parseInt(id));
    return recipe;
  }

  async function addRecipe(title, description, ingredients) {
    console.log(title, description, ingredients);
    const ingArray = ingredients.split(" ");

    const newRecipe = {
      title: title,
      description: description,
      ingredients: ingArray,
      cooking_time: 60
    }   

    const url = "https://krdo-cooking-api.herokuapp.com/api/cooking";
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <h1>Cooking App</h1>
      <Router>
          <Recipes path="/" recipes={recipes} addRecipe={addRecipe}/>
          <Recipes path="/recipes/with/:filter" recipes={recipes} addRecipe={addRecipe}/>
          <Recipe path="/recipe/:id" getRecipe={getRecipe}/>
      </Router>
    </>
  );
}

export default App;
