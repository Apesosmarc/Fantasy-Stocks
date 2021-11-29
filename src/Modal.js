import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="absolute h-full w-full bg-black bg-opacity-90 delete-modal flex justify-center items-center"
    >
      <div
        // only clicking outside the form exits the modal
        onClick={(e) => e.stopPropagation()}
        className=" p-5 bg-secondary delete-modal"
      >
        {props.title ? (
          <React.Fragment>
            <div className="text-lg mb-5">{props.title}</div>
            <div className="content mb-10">{props.content}</div>
            <div className="w-full flex justify-evenly">{props.actions}</div>
          </React.Fragment>
        ) : (
          <div className="p-10">{props.actions}</div>
        )}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
