import React from "react";
import { Link } from "react-router-dom";

export default function FirstWatchlist() {
  return (
    <Link to="/watchlist/create">
      <section className="addwatchlist-btn">
        <div className="text-6xl text-blue-500">+</div>
        <div className="text-primary">Click to add watchlist</div>
      </section>
    </Link>
  );
}
