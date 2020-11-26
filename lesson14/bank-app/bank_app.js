const {createStore} = require('redux');
const {bankReducer} = require('./bank_reducer');

// TODO: Import and apply 'thunk' middleware!
// TODO: 'redux-thunk' should already be in the package.json dependencies.

const store = createStore(bankReducer);
store.subscribe(() => console.log("Current state:", store.getState()));

// TODO: Replace these actions with async actions that dispatch with a delay.
// TODO: Delay should be random from 0 and 5 seconds.

store.dispatch({ type: "DEPOSIT", amount: 1000});
store.dispatch({ type: "DEPOSIT", amount: 2000});
store.dispatch({ type: "DEPOSIT", amount: 3000});
store.dispatch({ type: "WITHDRAW", amount: 5000});