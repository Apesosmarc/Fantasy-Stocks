import React, { Component } from "react";
import { connect } from "react-redux";
// ROUTER
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
// ACTION CREATORS
import { guestSignIn, guestSignOut } from "../../actions/guestAuth";
import { googleSignIn, googleSignOut } from "../../actions/OAuth2";
// import {
//   googleSignIn,
//   googleSignOut,
//   signIn,
//   signOut,
// } from "../../actions/index";
// icons
import { googleIcon } from "../../images/svgs/socialSVG";

class SignInButton extends Component {
  componentDidMount() {
    // ------- If Guest is logged in, do not load google oauth API --------
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
            console.log(this.auth.isSignedIn.get());

            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    }
  }

  onGoogleSignInClick = () => {
    this.auth.signIn();
  };

  onGoogleSignOutClick = () => {
    console.log("wat");
    this.auth.signOut();
  };

  // if google authenticated - calls login action creator with googleAuthId
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.googleSignIn(this.auth.currentUser.get().getId());
    } else {
      // this.props.signOut();
      this.props.googleSignOut();
    }
  };

  renderGoogleSignOutBtn = () => {
    if (this.props.googleAuth.isSignedIn === true) {
      console.log("ok");
      return (
        <button onClick={this.onGoogleSignOutClick} className="login-button">
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={this.onGoogleSignInClick} className="login-button flex">
        <i className="mr-3">{googleIcon}</i> Sign In
      </button>
    );
  };

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

  renderAuthButton() {
    // specifies Guest user or google user
    const userType = this.props.guestAuth.isGuestSignedIn
      ? "guest"
      : "googleUser";

    return userType === "guest"
      ? this.renderGuestSignOutBtn()
      : this.renderGoogleSignOutBtn();

    //if google user is signed in render sign in / sign out depending on status
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    guestAuth: state.guestAuth,
    googleAuth: state.googleAuth,
  };
};

export default connect(mapStateToProps, {
  guestSignOut,
  guestSignIn,
  googleSignIn,
  googleSignOut,
})(SignInButton);
