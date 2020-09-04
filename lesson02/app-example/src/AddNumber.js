import React, { useState } from 'react';

function AddNumber() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  return (
    <>
      <h3>Add Number</h3>
      <input onChange={
        (event) => setInput(event.target.value)} type="text" />
      <button
        onClick={(event) => {setSum(sum + parseInt(input))}}> 
        Add Numbers
      </button>
      <p>Sum: {sum}</p>
    </>
  );
}

export default AddNumber;
