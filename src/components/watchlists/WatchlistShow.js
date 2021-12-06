import React from "react";
import { connect } from "react-redux";
//Components
import AddStockToWatchlist from "./AddStockToWatchlist";
import LoadNewsButton from "../news/LoadNewsButton";
import RenderStock from "../stocks/RenderStock";
import WatchlistDelete from "./WatchlistDelete";
import FirstWatchlist from "./FirstWatchlist";
import Footer from "../footer/Footer";
import Spinner from "../loading animations/Spinner";
// Action Creators

import {
  addStockToWatchlist,
  fetchUser,
  deleteWatchlist,
  getStockQuote,
} from "../../actions/";

class WatchlistShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }

  state = {
    toggle: false,
    openLists: [],
  };

  // Toggles add stock input field
  toggleStockInput(index) {
    if (this.state.openLists.includes(index)) {
      return;
    }

    this.setState({
      openLists: [...this.state.openLists, index],
    });
  }

  onSubmit = (ticker, listId, OAuthId) => {
    this.props.addStockToWatchlist(ticker, listId, OAuthId);
  };

  deleteWatchlist(listId) {
    this.props.deleteWatchlist(this.props.currentUser.OAuthId, listId);
  }

  // passes user.watchlist.stocks array to renderstocks components
  renderStocks(stocks, listId) {
    return stocks.map((stock, index) => {
      return (
        <RenderStock
          ticker={stock}
          stockIndex={index}
          listId={listId}
          OAuthId={this.props.id}
          key={index}
        />
      );
    });
  }

  renderList(watchlists) {
    // standard arr of objects

    return watchlists.map((list, index) => {
      return (
        <div key={list._id}>
          <div className="relative flex flex-col justify-center items-center bg-secondary rounded-md mb-4 text-center w-96 md:w-3/4 lg:w-2/3 mx-auto">
            <div className="p-4">
              <div className="watchlist-header-container">
                <h1 className="text-4xl font-bold mb-2">{list.title}</h1>
                {list.description && (
                  <h2 className="text-xl font-bold">{list.description}</h2>
                )}
              </div>
              <WatchlistDelete
                title={list.title}
                onDelete={() => this.deleteWatchlist(list._id)}
              />
            </div>

            <table className="table-auto w-1/2">
              <thead>
                <tr>
                  <th>Holding</th>
                  <th>Price</th>
                  <th>Price Change</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list.stocks.length > 0 &&
                  this.renderStocks(list.stocks, list._id)}
              </tbody>
            </table>
            <div className="flex flex-col py-6 px-4 w-full lg:w-1/2 justify-center items-center">
              {this.state.openLists.includes(index) ? (
                <AddStockToWatchlist
                  onClick={this.onSubmit}
                  // index={index}
                  userId={this.props.id}
                  form={"watchlist" + index}
                  listId={list._id}
                />
              ) : (
                <button
                  onClick={() => this.toggleStockInput(index)}
                  className="utility-button text-lg py-2 px-4 w-2/4 mt-4"
                >
                  Add Stock
                </button>
              )}
            </div>
          </div>
          {list.stocks.length > 0 && (
            <LoadNewsButton
              stocks={list.stocks}
              listIndex={index}
              listId={list._id}
            />
          )}
        </div>
      );
    });
  }

  render() {
    return !this.props.currentUser?.watchlists ? (
      <React.Fragment>
        <Spinner loadingDescription={"Loading Your Watchlist"} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className="w-full flex justify-center items-center lg:pt-20">
          {/* If user has no watchlists, load add watchlist component */}
          {this.props.currentUser &&
          this.props.currentUser.watchlists.length === 0 ? (
            <FirstWatchlist />
          ) : (
            <div className="w-full">
              :
              {this.props.currentUser &&
                this.renderList(this.props.currentUser.watchlists)}
            </div>
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  deleteWatchlist,
  addStockToWatchlist,
  getStockQuote,
})(WatchlistShow);
