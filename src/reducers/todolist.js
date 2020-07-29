let initialState = {
    switch: 'ON',
    list: [],
    name: "Name"
}
function todolist(state = initialState, action) {
    switch(action.type){
        case 'ON':
            return {switch: 'ON', list: [...state.list, action.text]};
        case 'OFF':
            return {switch: 'OFF', list: [...state.list, action.text]};
        case 'CHANGE_NAME':
            return {...state, name: action.name}
        default:
            return state;
    }
}

export default todolist