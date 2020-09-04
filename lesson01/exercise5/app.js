// 'IsItFriday' is the name of your module
const itIsFriday = require('./IsItFriday'); 

if (itIsFriday()) {
    console.log("Today is friday!");
} else {
    console.log("Today is not friday.");
}