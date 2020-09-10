import React, { useState } from 'react';

function AddTask(props) {
  const [input, setInput] = useState("");
  return (
    <>
      <input type="text" placeholder="Write your new task here" size="30"
        onChange={(event) => setInput(event.target.value)} />
      <button onClick={(event) => props.addTask(input)}>Add Task</button>
    </>
  );
}

export default AddTask;
