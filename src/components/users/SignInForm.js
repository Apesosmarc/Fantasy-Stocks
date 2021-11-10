import React from "react";
import { useState, useEffect } from "react";

import Modal from "../../Modal";

import { googleIcon } from "../../images/svgs/socialSVG";

export default function SignInForm() {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const renderActions = () => {
    return (
      <div className="flex flex-col gap-5">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Login as Guest
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex justify-center items-center">
          <i className="mr-2">{googleIcon}</i> Login
        </button>
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
