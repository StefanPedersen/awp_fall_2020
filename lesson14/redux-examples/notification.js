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

// Step 1: Create action creator functions
// Step 2: Create async action creator function (that relies on thunk)

function showAndHide(text, id) {
  function action(dispatch) {
    dispatch(show(text, id));
    setTimeout(_ => dispatch(hide(42)), 5000);
  }
  return action;
}

function show(text, id) {
  return {type: "SHOW", text: text, id: id};
}

function hide(id) {
  return {type: "HIDE", id: id};
}

// Let's dispatch an action
//store.dispatch({ type: "SHOW", text: "Hello there", id: 42 });
//store.dispatch({ type: "SHOW", text: "Hey you", id: 43 });
//store.dispatch({ type: "SHOW", text: "Hi", id: 44 });
//store.dispatch({ type: "HIDE", id: 42 });

store.dispatch(showAndHide("hejsa 123", 45));
