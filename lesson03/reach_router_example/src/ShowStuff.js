import React from 'react';

function ShowStuff(props) {
  return(
    <>
      <h1>Show some stuff</h1>
      <p>Name of the stuff is: {props.name}</p>
    </>
  );
}

export default ShowStuff;
