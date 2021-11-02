import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, createUser } from "../../actions";

import WatchlistShow from "../watchlists/WatchlistShow";

class FetchUser extends Component {
  render() {
    return (
      <div className="mx-auto">
        <h2>Watchlists</h2>
        <WatchlistShow id={this.props.id} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  fetchUser,
  createUser,
})(FetchUser);
