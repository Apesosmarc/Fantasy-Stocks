import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, createUser } from "../../actions";
import history from "../../history";
//Components
import WatchlistShow from "../watchlists/WatchlistShow";
import Homescreen from "../Homescreen";
import { test_fetchUser } from "../../actions/usersTest";

class FetchUser extends Component {
  validateUser() {
    // If guest is signed in always redirect to guest login
    if (this.props.guestAuth.isGuestSignedIn) {
      return <WatchlistShow id="1" />;
    }

    // check if the OAuth2 id entered into URL is the one stored in state.
    const URL_ID = this.props.match.params.userId;
    if (this.props.googleAuth.userId == URL_ID) {
      return <WatchlistShow id={URL_ID} />;
    }
    // if not, redirect to home/login
    return <Homescreen />;
  }

  render() {
    return this.props.googleAuth.isSignedIn ||
      this.props.guestAuth.isGuestSignedIn ? (
      this.validateUser()
    ) : (
      <div className="text-white text-xl">loading...</div>
    );
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    googleAuth: state.googleAuth,
    guestAuth: state.guestAuth,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, null)(FetchUser);
