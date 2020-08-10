const sumFunction = require("./MyModule");
const anotherModule = require("./AnotherModule");

console.log(`2 + 2 is ${sumFunction(2, 2)}`);
console.log(`5 + 5 is ${sumFunction(5, 5)}`);

anotherModule.first();
anotherModule.second();
anotherModule.last();
