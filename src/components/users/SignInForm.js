import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
//Action Creators
import { guestSignIn } from "../../actions";
//Components
import Modal from "../../Modal";
import SignInButton from "./SignInButton";

function SignInForm({ guestSignIn, currentUser }) {
  const [selected, setSelected] = useState(false);

  // boolean that indicates if user login modal is displayed or not
  const toggleSelected = () => {
    setSelected(!selected);
  };

  const setGuestSignIn = () => {
    localStorage.setItem("guestLogin", "true");
    guestSignIn();
  };

  const renderActions = () => {
    return (
      <div className="flex flex-col gap-5 justify-center items-center">
        <button onClick={setGuestSignIn} className="login-button">
          Login as Guest
        </button>

        <SignInButton />
      </div>
    );
  };

  const renderModal = () => {
    return (
      <Modal actions={renderActions()} onDismiss={() => toggleSelected()} />
    );
  };

  return selected === false ? (
    <button
      onClick={() => setSelected(!selected)}
      className="utility-button px-6 py-3"
    >
      Log In
    </button>
  ) : (
    renderModal()
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

export default connect(mapStateToProps, { guestSignIn })(SignInForm);
