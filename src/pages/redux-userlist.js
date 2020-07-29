import React from 'react';
import PresentationalComponents from '../components/subredditPresentational';
import { connect } from 'react-redux';
import { handleChange, fetchPosts, handleRefresh } from '../actions/index'

function ReduxPresentation(props){
    // let list = ["a", "b", "c", "d", "e", "f"];
    // function handleChange(e){
    //     console.log(e.target.value);
    // }
    // function handleRefresh(e){
    //     console.log(e);
    // }
    if(props.list.length === 0)
        props.fetchPosts(props.selectedSubreddit);
    return (
        <PresentationalComponents
            handleChange={props.handleChange}
            handleRefresh={props.handleRefresh}
            list={props.list}
            selectedSubreddit={props.selectedSubreddit}
        />
    );
}

function mapStateToProps(state) {
    return {
        list: state.subreddit.list,
        selectedSubreddit: state.subreddit.selectedSubreddit
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleChange: (name) => dispatch(handleChange(name)),
        handleRefresh: (name) => dispatch(handleRefresh(name)),
        fetchPosts: (name) => dispatch(fetchPosts(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPresentation);
