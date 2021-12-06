import React, { Component } from "react";
import { connect } from "react-redux";
//Components
import WatchlistShow from "../watchlists/WatchlistShow";
import Homescreen from "../Homescreen";
import ValidateUsers from "./ValidateUsers";
import Spinner from "../loading animations/Spinner";

class FetchUser extends Component {
  validateUser() {
    // If guest is signed in always redirect to guest login
    if (this.props.guestAuth.isSignedIn) {
      return <WatchlistShow id={4442} />;
    }

    // check if the user id entered into URL is googleAuthID
    const URL_ID = this.props.match.params.userId;
    if (this.props.googleAuth.userId === URL_ID) {
      // // checks if user exists in DB
      // return this.checkIfUserExists(URL_ID);

      return <ValidateUsers id={URL_ID} />;
    } else {
      // if not, redirect to home/login
      return <Homescreen />;
    }
  }

  render() {
    if (!this.props.googleAuth && !this.propsGuestAuth) {
      return <Homescreen />;
    } else {
      return this.props.googleAuth.isSignedIn ||
        this.props.guestAuth.isSignedIn ? (
        this.validateUser()
      ) : (
        <Spinner loadingDescription={"Logging User In"} />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    googleAuth: state.googleAuth,
    guestAuth: state.guestAuth,
  };
};

export default connect(mapStateToProps, null)(FetchUser);
