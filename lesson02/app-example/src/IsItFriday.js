import React from 'react';
import moment from 'moment';

function IsItFriday() {
  const day = moment().day();

  let text = "It is not Friday";
  if (day === 5) {
    text = "It IS Friday";
  }

  return ( // This is JSX:
    <div className="App">
      <h2>IsItFriday</h2>
      <p>{text}</p>
    </div>
  );
}

export default IsItFriday;
