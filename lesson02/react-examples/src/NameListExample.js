import React from "react";

function NameListExample(props) {
  const { names } = props; // names is an array of string
  
  function mapFunction(element, index) {
    return <li key={index}>{element}</li>;
  }

  // Input: ["Kristian", "Jes", "Mads", "Torill"]
  // Output: [<li>Kristian</li>, <li>...</li>, <li>...</li>]

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
