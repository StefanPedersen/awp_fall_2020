import React, { useState } from "react";

function ButtonExample(props) {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState("The button is NOT clicked");

  return (
    <button
      type="button"
      onClick={(event) => {
        setCount(count + 1);
        setButtonClicked("This button is clicked");
      }}
    >
      {
        `${buttonClicked}. Count: ${count}`
      }
    </button>
  );
}

export default ButtonExample;
