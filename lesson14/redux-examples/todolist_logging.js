const { createStore, applyMiddleware } = require('redux');

function todo(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, // Existing todos
        { // New todo:
          id: state.reduce((prev, curr) => curr.id > prev ? curr.id : prev, 0) + 1, // Next id.
          text: action.text,
          done: false
        }];
    case 'REMOVE_TODO':
      return [...state].filter(todo => todo.id !== action.id); // Remove by id
    case 'FINISH_TODO':
      return state.map(todo => todo.id === action.id ? { ...todo, done: true } : todo);
    default:
      return state
  }
}

// Logging middleware for the store
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result
};

let store = createStore(todo, applyMiddleware(logger));

//store.subscribe(() => console.log("Current state:", store.getState()));

store.dispatch({ type: 'ADD_TODO', text: "Learn redux" });
store.dispatch({ type: 'ADD_TODO', text: "Read coding examples" });
store.dispatch({ type: 'ADD_TODO', text: "Implement learnings for greater good" });
store.dispatch({ type: 'FINISH_TODO', id: 2 });
store.dispatch({ type: 'FINISH_TODO', id: 3 });
store.dispatch({ type: 'REMOVE_TODO', id: 1 });
store.dispatch({ type: 'ADD_TODO', text: "Finish this example" });