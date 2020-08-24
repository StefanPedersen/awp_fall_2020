import React, { useState } from "react";

function ButtonExample(props) {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState("The button is NOT clicked");

  return (
    <button
      type="button"
      onClick={(event) => {
        setCount(count + 1);
        setButtonText("This button is clicked");
      }}
    >
      {
        `${buttonText}. Count: ${count}`
      }
    </button>
  );
}

export default ButtonExample;
