import React from "react";
import WatchlistForm from "./WatchlistForm";
import { createWatchlist } from "../../actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

class NewWatchlist extends React.Component {
  onSubmit = (formValues) => {
    this.props.createWatchlist(formValues);
  };

  render() {
    return (
      <div>
        <WatchlistForm onClick={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {
  createWatchlist,
})(NewWatchlist);
