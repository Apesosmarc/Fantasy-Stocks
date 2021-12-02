import React, { Component } from "react";
import { connect } from "react-redux";
// COMPONENTS
import Spinner from "../loading animations/Spinner";
import WatchlistShow from "../watchlists/WatchlistShow";
//ACTION CREATORS
import { loginUser } from "../../actions";

class ValidateUsers extends Component {
  componentDidMount() {
    // checks if user is in db, if not creates new user
    this.props.loginUser(this.props.id);
  }

  checkIfUserExists() {
    if (Object.entries(this.props.user).length === 0) {
      return <Spinner loadingDescription={"Logging User In"} />;
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
    user: state.users,
  };
};

export default connect(mapStateToProps, {
  loginUser,
})(ValidateUsers);
