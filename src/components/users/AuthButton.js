import React, { Component } from "react";
import { connect } from "react-redux";
// ROUTER
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
// ACTION CREATORS
import {
  signIn,
  signOut,
  guestSignIn,
  guestSignOut,
} from "../../actions/index";
// icons
import { googleIcon } from "../../images/svgs/socialSVG";

class AuthButton extends Component {
  componentDidMount() {
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
    if (this.props.userInfo.isGuestSignedIn) {
      return this.renderGuestSignIn();
    }

    if (this.props.userInfo.isSignedIn === null) {
      return null;
    } else if (this.props.userInfo.isSignedIn === true) {
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

  renderGuestSignIn() {
    if (!this.props.userInfo.isGuestSignedIn) {
      <button onClick={this.props.guestSignOut} className="login-button">
        Sign In
      </button>;
    }
    return (
      <button onClick={this.props.guestSignOut} className="login-button">
        Guest Sign Out
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
  guestSignIn,
  guestSignOut,
})(AuthButton);
