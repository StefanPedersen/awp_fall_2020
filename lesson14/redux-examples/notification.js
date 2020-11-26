const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// Logging middleware for the store
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result
};

// The reducer function
let reducer = function (state = [], action) {
  switch (action.type) {
    case "SHOW": {
      const notification = { text: action.text, id: action.id }
      return [...state, notification];
    }
    case "HIDE": {
      return state.filter(e => e.id !== action.id);
    }
    default: return state;
  }
};

// Creating the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

// Let's dispatch an action
store.dispatch({ type: "SHOW", text: "Hello there", id: 42 });
store.dispatch({ type: "SHOW", text: "Hey you", id: 43 });
store.dispatch({ type: "SHOW", text: "Hi", id: 44 });
store.dispatch({ type: "HIDE", id: 42 });
