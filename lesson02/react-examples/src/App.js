import React from "react";
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";
import NameListExample from "./NameListExample";

function App() {
  return (
    <>
      <HelloExample justAName="fellow programmer" />

      <ButtonExample />

      <br />
      <br />

      <InputTextExample />

      <NameListExample names={["Kristian", "Jes", "Mads", "Torill"]} />
    </>
  );
}

export default App;
