import React from "react";
import { connect } from "react-redux";
//comps
import WatchlistForm from "./WatchlistForm";
//action creators
import { createWatchlist } from "../../actions";

class NewWatchlist extends React.Component {
  onSubmit = (formValues) => {
    // auto capitalize
    formValues.title =
      formValues.title[0].toUpperCase() + formValues.title.substr(1);

    this.props.createWatchlist(this.props.currentUser.OAuthId, formValues);
  };

  render() {
    return (
      <div className="w-96 md:w-1/2 lg:w-1/3 mx-auto">
        <WatchlistForm onClick={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

export default connect(mapStateToProps, {
  createWatchlist,
})(NewWatchlist);
