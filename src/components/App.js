import React from "react";
import { connect } from "react-redux";
// ROUTER
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
// ACTION CREATORS
// import { createUser } from "../actions/usersTest";
// COMPONENTS
import FetchUsers from "./users/FetchUsers";
import NewWatchlist from "./watchlists/NewWatchlist";
import BackgroundImage from "./header/BackgroundImage";
import Homescreen from "./Homescreen";
import SignInButton from "./users/SignInButton";
import Header from "../components/header/Header";

class App extends React.Component {
  checkIfSignedIn = () => {
    return this.props.googleAuth || this.props.guestAuth ? true : false;
  };
  render() {
    return (
      <div>
        <Router history={history}>
          <BackgroundImage />

          <div className="container mx-auto pb-12">
            <Header />

            <Switch>
              <Route exact path="/" component={Homescreen} />
              <Route path="/watchlist/create" exact component={NewWatchlist} />
              <Route component={FetchUsers} path="/:userId" />
            </Switch>
          </div>
          <div className="hidden">
            <SignInButton />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    googleAuth: state.googleAuth.isSignedIn,
    guestAuth: state.guestAuth.isSignedIn,
  };
};
export default connect(mapStateToProps, null)(App);
