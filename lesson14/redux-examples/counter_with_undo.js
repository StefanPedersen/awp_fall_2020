const {createStore} = require('redux');
const ReduxUndo = require('redux-undo').default;
const { ActionCreators } = require('redux-undo');

// The reducer function
let counter = function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state
    }
};

const store = createStore(ReduxUndo(counter));
store.subscribe(() => console.log("Current state:", store.getState().present));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

store.dispatch(ActionCreators.undo()); // undo last action
store.dispatch(ActionCreators.undo()); // undo last action
store.dispatch(ActionCreators.redo()); // redo last action
