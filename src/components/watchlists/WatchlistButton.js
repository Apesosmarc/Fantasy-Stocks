import React from "react";
import { Link } from "react-router-dom";

export default function WatchlistButton() {
  return (
    <Link to="/watchlist/create" className="utility-button py-4 px-6 ">
      New watchlist
    </Link>
  );
}
