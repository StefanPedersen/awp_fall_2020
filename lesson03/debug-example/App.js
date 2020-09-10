// Try to step through this file with the debugger
console.log("App Start");

const array = ["apple", "banana", "orange"];
array.push("Tomato");

console.log(array);

function mapArrayToCount(element) {
  const count = element.length;
  return count;
}

const newArray = array.map(mapArrayToCount);

console.log(newArray);

console.log("App end");
