import React from "react";

export default function Spinner({ loadingDescription }) {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center mt-52  h-52 mx-auto">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin mx-auto"
        ></div>
        <p className="mt-10 text-lg">{loadingDescription}...</p>
      </div>
    </React.Fragment>
  );
}
