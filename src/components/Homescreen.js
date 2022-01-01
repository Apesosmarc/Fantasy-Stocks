import React from "react";
import { connect } from "react-redux";
import { newsSVG, dataSVG, crudSVG } from "../images/svgs/landingPageSVG";
import { Link } from "react-router-dom";
// COMPONENTS
import SignInForm from "./users/SignInForm";

class Homescreen extends React.Component {
  checkIfLoggedIn = () => {
    if (this.props.googleAuth.isSignedIn) {
      return (
        <Link to={`/${this.props.googleAuth.userId}`}>
          <button className="utility-button px-6 py-3">
            See Your Watchlists
          </button>
        </Link>
      );
    }

    if (this.props.guestAuth.isSignedIn) {
      return (
        <Link to={"/4442"}>
          <button className="utility-button px-6 py-3">
            See Your Watchlists
          </button>
        </Link>
      );
    }

    return <SignInForm />;
  };

  render() {
    return (
      <main className="landingpage-main">
        <section className="landingpage-hero">
          <h1 className="landingpage-header text-3xl capitalize tracking-wider mb-10 ">
            all the market info you need at a glance
          </h1>

          <h2 className="landingpage-header2 ">
            Real time stock quotes & news tailored to your holdings
          </h2>

          {this.checkIfLoggedIn()}
        </section>

        <section className="features-section">
          <div className="features-card">
            {dataSVG}
            <div className="features-copy">
              <strong className="features-header">Follow your favorites</strong>
              <p className="features-body">
                Get real time prices on your watchlists without having to login
                to your brokerage
              </p>
            </div>
          </div>
          <div className="features-card ">
            {newsSVG}
            <div className="features-copy">
              <strong className="features-header">
                Stay Informed on your holdings
              </strong>
              <p className="features-body">
                Create custom newsfeeds based on the watchlists you create
              </p>
            </div>
          </div>
          <div className="features-card">
            {crudSVG}
            <div className="features-copy">
              <strong className="features-header">
                Create, read, update and delete
              </strong>
              <p className="features-body">
                Enjoy the power of web-industry standard features at your
                fingertips!
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    googleAuth: state.googleAuth,
    guestAuth: state.guestAuth,
  };
};
export default connect(mapStateToProps, null)(Homescreen);
