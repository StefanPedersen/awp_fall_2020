import React from "react";
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";
import NameListExample from "./NameListExample";
import IsItFriday from "./IsItFriday";
import ListSum from "./ListSum";
import AddNumber from "./AddNumber";

function App() {
  return (
    <>
      <AddNumber />

      <IsItFriday />

      <HelloExample justAName="fellow programmer" />
      {" "}
      {/* just_a_name is a prop */}

      <ButtonExample />

      <br />
      <br />

      <InputTextExample />

      <NameListExample names={["Kristian", "Jes", "Mads", "Torill"]} />

      <ListSum numbers={[1, 2, 3, 4]} />
    </>
  );
}

export default App;
