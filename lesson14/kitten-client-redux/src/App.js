import { useSelector, useDispatch } from 'react-redux'
import { Router } from "@reach/router";
import Kitten from "./Kitten";
import Kittens from "./Kittens";

function App() {
  // The dispatch is used to send actions to the Redux store reducer
  const dispatch = useDispatch();

  // We get state from the redux store using a selector funtion that selects 
  // the part of the state that we are interested in.
  const kittens = useSelector(state => state.kittens);

  // Helper function for finding a kitten by id 
  function getKitten(id) {
    return kittens.find(kitten => kitten._id === id);
  }

  // Helper function for dispatching the ADD_HOBBY action
  function addHobby(kittenId, hobby) {
    return dispatch({ type: "ADD_HOBBY", id: kittenId, text: hobby });
  }

  // Helper function for dispatching the ADD_KITTEN action
  function addKitten(name) {
    return dispatch({ type: "ADD_KITTEN", name: name });
  }

  // Helper function for dispatching the DELETE_KITTEN action
  function deleteKitten(id) {
    // TODO: Implement!
  }

  return (
    <>
      <Router>
        <Kitten path="/kitten/:id" getKitten={getKitten} addHobby={addHobby} />
        <Kittens path="/" kittens={kittens} addKitten={addKitten} />
      </Router>
    </>
  );
}

export default App;