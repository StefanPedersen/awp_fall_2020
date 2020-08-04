import React from "react";

function NameListExample(props) {
  const list = [];
  for (const name of props.names) {
    list.push(<li>{name}</li>);
  }

  return (
    <>
      <h3>The names</h3>
      <ul>
        {list}
      </ul>
    </>
  );
}

export default NameListExample;
