const functional = require("./functional");

let result = functional.removeBadWords("This is some crap");
console.log(result);

result = functional.replaceBadWords("This is some crap");
console.log(result);

result = functional.createHtmlUl(["Apple", "Banana", "Orange"]);
console.log(result);

result = functional.createTasksFromStringArray(["Do stuff", "Return books", "Cook dinner"]);
console.log(result);

const tasks = [
  { task: 'Do laundry', done: false },
  { task: 'Clean bedroom', done: true },
  { task: 'Bake cake', done: true }
];
result = functional.transformTasksToHtml(tasks);
console.log(result);

result = functional.countDoneTasks(tasks);
console.log(result);

result = functional.getUndoneTasks(tasks);
console.log(result);

result = functional.capitalizeLongWords("welcome to jurrasic park");
console.log(result);

result = functional.averageLengthOfWorlds("welcome to jurrasic park");
console.log(result);

result = functional.summerizeTasks(tasks);
console.log(result);
