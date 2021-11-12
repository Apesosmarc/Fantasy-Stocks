import React from "react";
import ReactDOM from "react-dom";

const SignInModal = (props) => {
  return ReactDOM.createPortal(
    <div className=" h-full w-full bg-black bg-opacity-90 delete-modal flex justify-center items-center">
      <div className="p-5 bg-secondary delete-modal">
        <div className="text-lg mb-5">{props.title}</div>
        <div className="content mb-10">{props.content}</div>
        <div className="w-full flex justify-evenly">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#signinmodal")
  );
};

export default SignInModal;
