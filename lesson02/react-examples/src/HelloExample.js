import React from "react";

function HelloExample(props) {
  const { justAName } = props;
  return (
    <p>
      Hello {justAName}.
    </p>
  );
}

export default HelloExample;
