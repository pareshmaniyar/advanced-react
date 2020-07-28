const { func } = require("prop-types")

let initialState = {
    list: []
}

function subreddit(state = initialState, action) {
    switch (action.type) {
        case "RECEIVED_POSTS":
            return { list: action.payload}
            break;
        default: return state;
    }
}