import React from "react";
import { Link } from "react-router-dom";

export default function FirstWatchlist({}) {
  return (
    <Link to="/watchlist/create">
      <section className="bg-secondary border border-dotted border-primary h-96 px-12 w-96 flex flex-col justify-center items-center">
        <div className="text-6xl text-blue-500">+</div>
        <div className="text-primary">Click to add watchlist</div>
      </section>
    </Link>
  );
}
