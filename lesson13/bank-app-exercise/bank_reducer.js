function reducer(state = 0, action) {
    switch (action.type) {
        case 'DEPOSIT': {
            // TODO: return new state
            return state;
        }
        case 'WITHDRAW': {
            // TODO: return new state
            return state;
        }
        default:
            return state
    }
}

module.exports = {
    bankReducer: reducer
};
