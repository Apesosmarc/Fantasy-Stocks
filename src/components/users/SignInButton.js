import React, { Component } from "react";
import { connect } from "react-redux";

// ACTION CREATORS
import {
  guestSignIn,
  guestSignOut,
  googleSignIn,
  googleSignOut,
} from "../../actions/";

import { googleIcon } from "../../images/svgs/socialSVG";

// === this component signs guest and googleAuth users in, also listens for Google OAuth2 Signout. ======

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

            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    }
  }

  onGoogleSignInClick = () => {
    this.auth.signIn();
  };

  onGoogleSignOutClick = () => {
    this.auth.signOut();
  };

  // if google authenticated - calls login action creator with googleAuthId
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.googleSignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.googleSignOut();
    }
  };

  renderGoogleSignOutBtn = () => {
    if (this.props.googleAuth.isSignedIn === true) {
      return (
        <button onClick={this.onGoogleSignOutClick} className="login-button">
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={this.onGoogleSignInClick} className="login-button flex">
        <i className="mr-5">{googleIcon}</i> Sign In
      </button>
    );
  };

  renderGuestSignOutBtn = () => {
    return (
      <button
        onClick={() => {
          //prevents errors if user is already signed in on Google
          if (this.props.googleAuth.isSignedIn) return;
          this.guestClickSignOut();
        }}
        className="login-button"
      >
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
    const userType = this.props.guestAuth.isSignedIn ? "guest" : "googleUser";

    //render guest/google user depending on userType
    return userType === "guest"
      ? this.renderGuestSignOutBtn()
      : this.renderGoogleSignOutBtn();
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
