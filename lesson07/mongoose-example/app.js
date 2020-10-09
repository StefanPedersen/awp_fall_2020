const mongoose = require("mongoose");

// use recipes;
mongoose.connect("mongodb://localhost/recipes", { useNewUrlParser: true, useUnifiedTopology: true });

async function doStuff() {
  const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    cookingTime: Number,
    ingredients: [String]
  });
  
  const Recipe = mongoose.model("Recipe", recipeSchema);
  
  const pizza = new Recipe({
    title: "Pizza",
    description: "Pizza is nice",
    cookingTime: 60,
    ingredients: ["tomato", "cheese", "onion"]
  });
  
  try {
    const savedPizza = await pizza.save();
    console.log(savedPizza["_id"], "has been saved");
  } catch (error) {
    console.error(error);
  }

  // Find first recipe with name 'pizza', but ignores case
  const foundPizza = await Recipe.findOne({ title: /pizza/i });
  console.log("Found a recipe:", foundPizza);

  const arrayResult = await Recipe.find({ title: /pizza/i });
  console.log("Found recipes:", arrayResult);

  mongoose.disconnect();
}

doStuff();
