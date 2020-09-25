const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const port = 8080;

app.get("/api/recipes", (request, response) => {
  response.json(["pizza1", "pizza2"]);
});

app.post("/api/recipes", (request, response) => {
  console.log(request.body);
  response.json({ msg: "Recipe added!" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
