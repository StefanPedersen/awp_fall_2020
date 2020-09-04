const moment = require('moment'); 

module.exports = function() {
  const day = moment().day();
  return (day === 5);
};

