import { combineReducers } from 'redux'
import todolist from './todolist';
import subreddit from './subreddit';

export default combineReducers({
    subreddit,
    todolist 
})
