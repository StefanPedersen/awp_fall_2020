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

function show(text, id) {
  return { type: "SHOW", text: text, id: id }
}

function hide(id) {
  return { type: "HIDE", id: id }
}

function showAndHideWithDelay(text, id) {
  function action(dispatch) {
    dispatch(show(text, id));
    setTimeout(() => dispatch(hide(id)), 5000);
  }
  return action;
}

// Let's dispatch an action
//store.dispatch(show("hello", 42));
//store.dispatch(show("hello again", 43));
//store.dispatch(show("hello again again", 44));
//store.dispatch(hide(42));

store.dispatch(showAndHideWithDelay("hello", 42));
