import React from "react";

function ListSum(props) {
  const { numbers } = props;
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return (
    <>
      <p>
        Sum:
        {sum}
      </p>
    </>
  );
}
export default ListSum;
