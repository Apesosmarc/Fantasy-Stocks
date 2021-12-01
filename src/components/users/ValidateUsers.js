import React, { Component } from "react";
import { connect } from "react-redux";
import {
  test_userExists,
  test_createUser,
  test_loginUser,
} from "../../actions/usersTest";

import WatchlistShow from "../watchlists/WatchlistShow";

class ValidateUsers extends Component {
  componentDidMount() {
    // checks if user is in db, if not creates new user
    this.props.test_loginUser(this.props.id);
  }

  checkIfUserExists() {
    const user = this.props.user;

    if (Object.entries(user).length === 0) {
      return <div>loading........</div>;
    } else {
      return <WatchlistShow id={this.props.id} />;
    }
  }

  render() {
    return this.checkIfUserExists();
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.testAPI,
  };
};

export default connect(mapStateToProps, {
  test_loginUser,
})(ValidateUsers);
