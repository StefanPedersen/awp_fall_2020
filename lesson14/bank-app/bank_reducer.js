function reducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case 'DEPOSIT': {
      if (action.amount <= 0) 
        return { amount: state.amount };
      else return { amount: state.amount + action.amount };
    }
    case 'WITHDRAW': {
      if (action.amount <= 0 || action.amount > state.amount) 
        return { amount: state.amount };
      else return { amount: state.amount - action.amount };
    }
    default:
      return state
  }
}
module.exports = {
  bankReducer: reducer
};