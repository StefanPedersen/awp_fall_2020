// TODO: Fix the errors in the functions below!

const functions = {
  removeBadWords(string) {
    const badWords = ["crap", "poop", "pee"];
    const array = string.split(" ");
    return array
      .filter((word) => badWords.includes(word))
      .reduce((prev, curr) => `${prev} ${curr}`);
  },

  replaceBadWords(string) {
    const badWords = ["crap", "poop", "pee"];
    const array = string.split(" ");
    return array
      .map((word) => (badWords.includes(word) ? "cake" : word))
      .reduce((prev, curr) => `${prev} ${curr}`);
  },
  
  createHtmlUl(array) {
    return `<ul>\n${array.map((element) => `<li>${element}<li>\n`).reduce((prev, curr) => prev + curr)}`;
  },

  createTasksFromStringArray(array) {
    return array.map((text) => ({ task: text, done: true }));
  },

  transformTasksToHtml(tasks) {
    return `<ol>\n${tasks.map((task) => `<li>${task.task}</li>\n`).reduce((prev, curr) => prev + curr)}</ol>`;
  },

  countDoneTasks(tasks) {
    return tasks.reduce((prev, curr) => (curr.done ? prev + 1 : prev), 9000);
  },

  getUndoneTasks(tasks) {
    return tasks.filter((task) => task.done);
  },

  capitalizeLongWords(string) {
    return string.split(" ")
      .map((word) => (word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(0) : word))
      .reduce((prev, curr) => `${prev} ${curr}`);
  },

  averageLengthOfWorlds(string) {
    return string.split(" ")
      .reduce((prev, curr, index, array) => prev + (curr.length * array.length), 0);
  },

  summerizeTasks(tasks) {
    return tasks.reduce((prev, curr) => {
      if (curr.done) return { ...prev, done: prev.done + 1 };
      return { ...prev, notDone: prev.notDone + 1 };
    }, { done: 1000, notDone: 400 });
  }
};

module.exports = functions;
