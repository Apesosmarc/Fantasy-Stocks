import React from "react";
import { connect } from "react-redux";
// ROUTER
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
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
  componentDidMount() {
    // this.props.createUser();
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <BackgroundImage />

          <div className="container mx-auto">
            <Header />

            <Switch>
              <Route exact path="/" component={Homescreen} />
              <Route path="/watchlist/create" exact component={NewWatchlist} />
              <Route component={FetchUsers} path="/:userId" />
            </Switch>
            <SignInButton />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo, currentUser: state.user };
};
export default connect(mapStateToProps, {
  // createUser,
})(App);
