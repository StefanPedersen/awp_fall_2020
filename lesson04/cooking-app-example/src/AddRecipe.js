import React, {useState, useEffect} from 'react';

function AddRecipe(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  return (
    <>
      <h3>Add Recipe</h3>

      <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Title" />
      <input onChange={(event) => setDescription(event.target.value)} type="text" placeholder="Description"/>
      <input onChange={(event) => setIngredients(event.target.value)} type="text" placeholder="Ingredients" />

      <button type="button" onClick={(event) => props.addRecipe(title, description, ingredients)}>
        Submit
      </button>
    </>
  );
}

export default AddRecipe;
