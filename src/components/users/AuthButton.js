import React, { Component } from "react";
import { connect } from "react-redux";
// ROUTER
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
// ACTION CREATORS
import {
  signIn,
  signOut,
  guestSignOut,
  guestSignIn,
} from "../../actions/index";
// icons
import { googleIcon } from "../../images/svgs/socialSVG";

class AuthButton extends Component {
  componentDidMount() {
    // If Guest is logged in, do not load google oauth API

    if (localStorage.getItem("guestLogin")) {
      this.props.guestSignIn();
    } else {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "622605634455-9rj5l7mrdvr4cars37jsgeirc6li6p9j.apps.googleusercontent.com",
            scope: "email",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();

            this.onAuthChange(this.auth.isSignedIn.get());

            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    }
  }

  // Google API for sign and getting userId
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    // If guest is signed in only show guestSignOut btn
    if (this.props.guestInfo.isGuestSignedIn) {
      return this.renderGuestSignOutBtn();
    }

    //if google user is signed in render 2 possible outcomes
    if (this.props.userInfo.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="login-button">
          Sign Out
        </button>
      );
    } else if (this.props.userInfo.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClick} className="login-button flex">
          <i className="mr-3">{googleIcon}</i> Sign In
        </button>
      );
    }
  }

  renderGuestSignOutBtn = () => {
    return (
      <button onClick={() => this.guestClickSignOut()} className="login-button">
        Sign Out
      </button>
    );
  };

  guestClickSignOut = () => {
    localStorage.removeItem("guestLogin");
    this.props.guestSignOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    guestInfo: state.user,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
  guestSignOut,
  guestSignIn,
})(AuthButton);
