import React from "react";
import { connect } from "react-redux";
// ROUTER
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import history from "../history";
// ACTION CREATORS
import { signIn, signOut } from "../actions";
import FetchUsers from "./users/FetchUsers";
// COMPONENTS
import NewWatchlist from "./watchlists/NewWatchlist";
import BackgroundImage from "./header/BackgroundImage";

import Header from "../components/header/Header";

class App extends React.Component {
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
    if (this.props.userInfo.isSignedIn === null) {
      return null;
    } else if (this.props.userInfo.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="ui button red">
          Sign Out
        </button>
      );
    } else if (this.props.userInfo.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClick} className="ui button red">
          Sign In
        </button>
      );
    }
  }

  renderUser() {
    if (this.props.userInfo.isSignedIn) {
      return (
        <div>
          <FetchUsers id={this.props.userInfo.userId} />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <BackgroundImage />

          <div className="container mx-auto md:w-1/2 md:px-10 sm:w-3/4 px-5">
            <Header />
            <Switch>
              <Route render={() => this.renderUser()} path="/" exact />
              <Route path="/watchlist/create" exact component={NewWatchlist} />
            </Switch>
            <div>{this.renderAuthButton()}</div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};
export default connect(mapStateToProps, { signIn, signOut })(App);
