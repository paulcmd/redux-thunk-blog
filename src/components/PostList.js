import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);

/*
Redux thunk allows you to return a function eg async await function, from an action creator.
redux can only return a normal object from an action creator
*/