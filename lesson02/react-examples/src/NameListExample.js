import React from "react";

function NameListExample(props) {
  const { names } = props;
  
  function mapFunction(element, index) {
    return <li key={index}>{element}</li>;
  }

  // prop.names is an array of string
  const list = names.map(mapFunction);
  return (
    <>
      <h3>The names</h3>
      <ol>
        {list}
      </ol>
    </>
  );
}

export default NameListExample;
