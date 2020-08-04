import React, { useState } from "react";

function IsItFriday(props) {
  const [friday, setFriday] = useState((new Date()).getDay() === 5);

  let content = <p>It is not friday</p>;
  if (friday) {
    content = <p>It is friday</p>;
  }
  return (
    <div>
      {content}
    </div>
  );
}

export default IsItFriday;
