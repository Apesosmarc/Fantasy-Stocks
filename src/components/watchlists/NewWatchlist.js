import React from "react";
import WatchlistForm from "./WatchlistForm";
import { createWatchlist, fetchState } from "../../actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class NewWatchlist extends React.Component {
  componentDidMount() {
    this.props.fetchState();
  }
  onSubmit = (formValues) => {
    this.props.createWatchlist(formValues, this.props.userInfo.userId);
  };

  render() {
    return (
      <div>
        <WatchlistForm onClick={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, {
  createWatchlist,
  fetchState,
})(NewWatchlist);
