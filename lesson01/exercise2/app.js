console.log("Hello!");

const fetch = require("node-fetch");

const name = "kristian";

fetch("https://api.genderize.io?name=" + name)
    .then(res => res.json())
    .then(data => console.log(data.gender));