import axios from 'axios';

export const toggleSwitch = text => ({
    type: 'TOGGLE',
    text
})

export const switchOn = text => ({
    type: 'ON',
    text
})

export const switchOff = text => ({
    type: 'OFF',
    text
})

export const changeName = name => ({
    type: 'CHANGE_NAME',
    name
})

export const handleChange = name => ({
    type: 'CHANGE_SUBREDDIT',
    name
})

export const setPosts = (list) => ({
    type: 'SET_POSTS',
    payload: list
})

export const handleRefresh = name => (dispatch, getState) => {
    if(name != getState().subreddit.selectedSubreddit) {
        dispatch(fetchPosts(name));
    }
}

export const fetchPosts = name => dispatch => {
    return axios(`https://www.reddit.com/r/${name}.json`)
        // .then(response => response.json())
        .then(response => {
            console.log(response.data.data.children)
            dispatch(setPosts(response.data.data.children));
        })
        .catch((e) => console.log(e));
}
