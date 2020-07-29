
let initialState = {
    list: [],
    selectedSubreddit: 'react',
}

function subreddit(state = initialState, action) {
    switch (action.type) {
        case "RECEIVED_POSTS":
            return { ...state, list: action.payload}
        case 'CHANGE_SUBREDDIT':
            return { ...state, selectedSubreddit: action.name }
        case 'REFRESH_SUBREDDIT':
            console.log("REFRESH_SUBREDDIT");
            return state;
        case 'SET_POSTS': return {...state, list: action.payload}
        default:
            return state;
    }
}

export default subreddit

