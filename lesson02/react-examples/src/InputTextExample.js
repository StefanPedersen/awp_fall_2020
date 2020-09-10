import React, { useState } from "react";

function InputTextExample(props) {
  const [input, setInput] = useState("");
    
  return (
    <>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <p>
        The contents of <strong>this.state.input</strong>: {input}
      </p>
    </>
  );
}

export default InputTextExample;
