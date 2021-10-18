import React from "react";
import { createWatchlist } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NewWatchlist extends React.Component {
  onClick = (e) => {
    this.props.createWatchlist();
  };

  render() {
    return (
      <button className="ui button green" onClick={this.onClick}>
        Submit
      </button>
    );
  }
}

export default connect(null, {
  createWatchlist,
})(NewWatchlist);
