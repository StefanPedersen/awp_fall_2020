import { useState, useEffect } from "react";
import AuthService from "./AuthService";
import Login from "./Login";

const API_URL = "http://localhost:8080/api";

const authService = new AuthService(`${API_URL}/users/authenticate`);

function App() {
  const [kittens, setKittens] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/kittens`;
      const response = await authService.fetch(url);
      const data = await response.json();
      setKittens(data);
    }
    getData();
  }, [requestCount]);

  async function login(username, password) {
    try {
      const resp = await authService.login(username, password);
      console.log("Authentication:", resp.msg);
      setRequestCount(requestCount + 1);
    } catch (e) {
      console.log("Login", e);
    }
  }
  login("kristian", "123");

  let contents = <p>No kittens!</p>;
  if (kittens.length > 0) {
    contents =
      <ol>
        {kittens.map(kitten => <li key={kitten.id}>{kitten.name}</li>)}
      </ol>;
  }

  return (
    <>
      <h1>Kittens</h1>
      {contents}
      <Login login={(username, password) => login(username, password)} />
      {authService.loggedIn() ? <pre>User is logged in</pre> : <pre>User is not logged in</pre>}
    </>
  );
}

export default App;
