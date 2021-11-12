import React from "react";
import { connect } from "react-redux";
// ROUTER
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import history from "../history";
// ACTION CREATORS
import { signIn, signOut, guestSignIn, guestSignOut } from "../actions";

// COMPONENTS
import FetchUsers from "./users/FetchUsers";
import NewWatchlist from "./watchlists/NewWatchlist";
import BackgroundImage from "./header/BackgroundImage";
import Homescreen from "./Homescreen";
import AuthButton from "./users/AuthButton";

import Header from "../components/header/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <BackgroundImage />

          <div className="container mx-auto">
            <Header />
            <Switch>
              <Route path="/" exact component={Homescreen} />
              <Route component={FetchUsers} path="/:userId" exact />
              <Route path="/watchlist/create" exact component={NewWatchlist} />
            </Switch>
            <AuthButton />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};
export default connect(mapStateToProps, {
  signIn,
  signOut,
  guestSignIn,
  guestSignOut,
})(App);
