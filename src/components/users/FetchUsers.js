import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, createUser } from "../../actions";
import history from "../../history";
//Components
import WatchlistShow from "../watchlists/WatchlistShow";
import Homescreen from "../Homescreen";

class FetchUser extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  // onSignInClick = () => {
  //   this.auth.signIn();
  // };

  // onSignOutClick = () => {
  //   this.auth.signOut();
  // };

  // onAuthChange = (isSignedIn) => {
  //   if (isSignedIn) {
  //     this.props.signIn(this.auth.currentUser.get().getId());
  //   } else {
  //     this.props.signOut();
  //   }
  // };

  // renderAuthButton() {
  //   if (this.props.userInfo.isGuestSignedIn) {
  //     return this.renderGuestSignIn();
  //   }

  //   if (this.props.userInfo.isSignedIn === null) {
  //     return null;
  //   } else if (this.props.userInfo.isSignedIn === true) {
  //     return (
  //       <button onClick={this.onSignOutClick} className="ui button red">
  //         Sign Out
  //       </button>
  //     );
  //   } else if (this.props.userInfo.isSignedIn === false) {
  //     return (
  //       <button onClick={this.onSignInClick} className="ui button red">
  //         Sign In
  //       </button>
  //     );
  //   }
  // }

  // renderGuestSignIn() {
  //   if (!this.props.userInfo.isGuestSignedIn) {
  //     <button onClick={this.props.guestSignOut} className="ui button red">
  //       Sign In
  //     </button>;
  //   }
  //   return (
  //     <button onClick={this.props.guestSignOut} className="ui button red">
  //       Sign Out
  //     </button>
  //   );
  // }

  // renderUser() {
  //   console.log(this.props);
  //   if (this.props.userInfo.isGuestSignedIn) {
  //     return (
  //       <div>
  //         <FetchUsers id={this.props.userInfo.userId} />
  //       </div>
  //     );
  //   }
  //   if (this.props.userInfo.isSignedIn) {
  //     return (
  //       <div>
  //         <FetchUsers id={this.props.userInfo.userId} />
  //       </div>
  //     );
  //   } else {
  //     return <Homescreen />;
  //   }
  // }

  validateUser() {
    const userId = this.props.match.params.userId;

    if (this.props.userInfo.userId == userId) {
      return <WatchlistShow id={userId} />;
    } else {
      history.push("/");
      return <Homescreen />;
    }
  }

  render() {
    {
      return this.props.userInfo ? (
        this.validateUser()
      ) : (
        <div className="text-4xl">
          fetchuser Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequatur doloremque necessitatibus, modi adipisci sapiente
          architecto dolorum nesciunt
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  createUser,
})(FetchUser);
