import React, { Component } from "react";

export default class LoadNewsButton extends Component {
  render() {
    return (
      <div
        className="bg-secondary rounded-md mb-6 mx-auto text-white w-1/2 "
        style={{
          background: "linear-gradient(30deg, #57ddff, #c058f3)",
        }}
      >
        <button
          onClick={() => console.log("hi")}
          className="w-full h-full p-4 relative"
        >
          <span className="text-2xl ">Show News</span>
        </button>
      </div>
    );
  }
}
