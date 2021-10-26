import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, createUser } from "../../actions";

class FetchUser extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    watchlists: state.user.watchlists,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  createUser,
})(FetchUser);
