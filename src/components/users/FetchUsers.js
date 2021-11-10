import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, createUser } from "../../actions";
//Components
import WatchlistShow from "../watchlists/WatchlistShow";

class FetchUser extends Component {
  render() {
    return <WatchlistShow id={this.props.id} />;
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  fetchUser,
  createUser,
})(FetchUser);
