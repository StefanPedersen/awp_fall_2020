import React from 'react';

import IsItFriday from './IsItFriday';
import AddNumber from './AddNumber';
import AddTwoNumbers from './AddTwoNumbers';

function App() {
  return (
    <div className="App">
      <h1>My app</h1>

      <AddNumber></AddNumber>

      <AddTwoNumbers first={2} second={5}></AddTwoNumbers>

      <IsItFriday></IsItFriday>
    </div>
  );
}

export default App;
