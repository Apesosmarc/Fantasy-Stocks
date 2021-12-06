import React from "react";
// components
import SignInButton from "../users/SignInButton";
import WatchlistButton from "../watchlists/WatchlistButton";

export default function Footer() {
  return (
    <div className="flex justify-evenly items-center mx-auto w-3/4 lg:w-1/2 mt-12">
      <SignInButton />
      <WatchlistButton />
    </div>
  );
}
