import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewWatchlist from "./watchlists/NewWatchlist";
import WatchlistShow from "./watchlists/WatchlistShow";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/" exact component={WatchlistShow} />
            <Route path="/watchlist/create" exact component={NewWatchlist} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
