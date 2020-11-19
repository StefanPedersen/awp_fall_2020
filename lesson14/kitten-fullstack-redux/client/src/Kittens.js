import { useState } from 'react';
import { Link } from "@reach/router";

function Kittens(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  if (!props.kittens) {
    return <p>No data!</p>;
  }

  return (
    <>
      <h1>Kittens (local)</h1>
      <ol>
        {props.kittens.map(kitten =>
          <li key={kitten._id}>
            <Link to={`/kitten/${kitten._id}`}>{kitten.name}</Link>
          </li>)}
      </ol>

      <input name="newKittenName" onChange={handleChange} type="text" />
      <button onClick={() => props.addKitten(input)} type="submit">Add New Kitten</button>
    </>
  );
}

export default Kittens;
