let initialState = {
    switch: 'ON',
    list: []
}
function reducer(state = initialState, action) {
    switch(action.type){
        case 'ON':
            return {switch: 'ON', list: [...state.list, action.text]};
        case 'OFF':
            return {switch: 'OFF', list: [...state.list, action.text]};
        default:
            return state;
    }
}

export default reducer