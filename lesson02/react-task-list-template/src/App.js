import React, { useState } from 'react';

function App() {
  // This is your task state
  const { data, setData } = useState([
    { task: 'Do laundry', done: false },
    { task: 'Clean bedroom', done: true },
    { task: 'Bake cake', done: true }
  ]);

  // How about wrapping each task in a <li></li> and putting it in this array below?
  // Hint: Use at for loop
  const array = [<li>foo</li>, <li>bar</li>, <li>baz</li>]

  return (
    <>
      <h2>Task List</h2>
      <ul>
        {/* The array of tasks must be rendered below: */}
        {array} 
      </ul>
    </>
  )
}

export default App;
