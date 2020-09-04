import React, { useState } from 'react';

function AddTwoNumbers(props) {

  const {first, second} = props;
  console.log(first, second);

  return (
    <>
      <p>Sum of two numbers: {first+second}</p>
    </>
  );
}

export default AddTwoNumbers;
