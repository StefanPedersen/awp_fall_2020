import { combineReducers } from 'redux';

/**
 * This kittens reducer function implements these actions:
 * - ADD_KITTEN: Add a new kitten object to the redux store. New id is picked by random. 
 * - ADD_HOBBY: Add a new hobby to one of the kittens in the redux store. Find kitten by id.
 */
function kittens(state = [], action) {
  switch (action.type) {
    case 'ADD_KITTEN': {
      const kitten = {
        name: action.name,
        hobbies: [],
        _id: Math.random().toString(36).substring(2, 15) // Just a random string
      };
      return [...state, kitten];
    }
    case 'ADD_HOBBY': {
      return state.map(kitten => kitten._id === action.id ?
        { ...kitten, hobbies: [...kitten.hobbies, action.text] } : kitten);
    }
    case 'DELETE_KITTEN': {
      return state; // TODO: Implement kitten deletion!
    }
    default: return state;
  }
}


export default combineReducers({
  kittens
})
