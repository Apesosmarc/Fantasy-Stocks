import React from "react";
import WatchlistForm from "./WatchlistForm";
import { createWatchlist } from "../../actions";
import { test_createWatchlist } from "../../actions/usersTest";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class NewWatchlist extends React.Component {
  componentDidMount() {
    // fetch state??
  }
  onSubmit = (formValues) => {
    // auto capitalize
    formValues.title =
      formValues.title[0].toUpperCase() + formValues.title.substr(1);

    // this.props.createWatchlist(formValues, this.props.currentUser.id);

    this.props.test_createWatchlist(this.props.currentUser.OAuthId, formValues);
  };

  render() {
    return (
      <div className="w-96 md:w-1/2 lg:w-1/3 mx-auto">
        <WatchlistForm onClick={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.testAPI.currentUser,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, {
  createWatchlist,
  test_createWatchlist,
})(NewWatchlist);
