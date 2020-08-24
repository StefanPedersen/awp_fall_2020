import React from "react";

function Hello(props) {
  const { helloName } = props;
  return (
    <p>
      {`Welcome ${helloName}`}
    </p>
  );
}

export default Hello;
