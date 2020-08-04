import React, { useState, useEffect } from "react";

function AddNumber() {
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("sum effect");
    
    // Update the document title using the browser API
    document.title = `The sum is ${sum}`;
    return () => {
      console.log("Sum clean up");
    };
  });

  return (
    <>
      <h3>Add Number</h3>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <button type="button" onClick={(event) => setSum(sum + parseInt(input, 10))}>Add Number</button>
      <p>
        Sum:
        {sum}
      </p>
    </>
  );
}

export default AddNumber;
