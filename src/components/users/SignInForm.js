import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Action Creators
import { guestSignIn } from "../../actions/index";
//Components
import Modal from "../../Modal";
import AuthButton from "./AuthButton";

function SignInForm({ guestSignIn }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const setGuestSignIn = () => {
    localStorage.setItem("guestLogin", "true");
    guestSignIn();
  };

  const renderActions = () => {
    return (
      <div className="flex flex-col gap-5">
        <button
          onClick={setGuestSignIn}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Login as Guest
        </button>

        <AuthButton />
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
      className="utility-button px-4 py-2"
    >
      Log In
    </button>
  ) : (
    renderModal()
  );
}

export default connect(null, { guestSignIn })(SignInForm);
