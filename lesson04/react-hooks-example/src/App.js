import React, {useState, useEffect} from 'react';
import ExampleButton from './ExampleButton';
import ExampleEffect from './ExampleEffect';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      // Just some example data from a public and open API
      const url = "https://jsonplaceholder.typicode.com/todos/5";
      const response = await fetch(url);
      const data = await response.json();
 
    }; 
    fetchData();
  }, []); // Only use this effect after first render

  return (
    <div className="App">
      <h2>React Hooks</h2>

      <ExampleButton></ExampleButton>

      <ExampleEffect></ExampleEffect>

      <h3>Data from API:</h3>
      <p>{data.title}</p>
    </div>
  );
}

export default App;
