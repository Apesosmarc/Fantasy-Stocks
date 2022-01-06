import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = (props) => {
  // scrolls to top of page
  window.scrollTo(0, 0);
  // disables scrolling outside the VH of the modal comp
  useEffect(() => {
    const body = document.querySelector("body");

    body.classList.add("overflow-y-hidden");

    // cleanup function runs on last call
    return () => body.classList.remove("overflow-y-hidden");
  });

  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="absolute w-full bg-black bg-opacity-90 delete-modal flex justify-center items-start md:items-center lg:items-center"
      style={{ height: "100vh" }}
    >
      <div
        // only clicking outside the form exits the modal
        onClick={(e) => e.stopPropagation()}
        className="mt-48 md:mt-0 p-5 bg-secondary delete-modal"
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
