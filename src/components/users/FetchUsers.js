import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, createUser } from "../../actions";
import history from "../../history";
//Components
import WatchlistShow from "../watchlists/WatchlistShow";
import Homescreen from "../Homescreen";

class FetchUser extends Component {
  validateUser() {
    if (this.props.guestInfo.isGuestSignedIn) {
      return <WatchlistShow id="1" />;
    }
    const userId = this.props.match.params.userId;

    if (this.props.userInfo.userId == userId) {
      return <WatchlistShow id={userId} />;
    }

    if (this.props.userInfo.userId !== userId) {
      return <Homescreen />;
    }
  }

  render() {
    console.log(this.props.userInfo);
    return this.props.userInfo ? this.validateUser() : <div>loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    guestInfo: state.user,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  createUser,
})(FetchUser);
