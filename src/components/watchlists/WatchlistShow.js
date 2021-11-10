import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
//Components
import AddStockToWatchlist from "./AddStockToWatchlist";
import LoadNewsButton from "../news/LoadNewsButton";
import RenderStock from "../stocks/RenderStock";
import WatchlistDelete from "./WatchlistDelete";
// Action Creators
import {
  deleteStock,
  deleteWatchlist,
  addStockToWatchlist,
  fetchUser,
} from "../../actions/";
import { getStockQuote } from "../../actions/stocks";

class WatchlistShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }
  state = {
    toggle: false,
    openLists: [],
  };

  toggleStockInput(index) {
    if (this.state.openLists.includes(index)) {
      return;
    }

    this.setState({
      openLists: [...this.state.openLists, index],
    });
  }

  onSubmit = (ticker, index) => {
    console.log(ticker, index);

    this.props.addStockToWatchlist(ticker, index, this.props.id);
  };

  deleteWatchlist(index) {
    this.props.deleteWatchlist(this.props.id, index);

    // removes deleted array from array of opened lists
    this.setState({
      openLists: this.state.openLists.filter(
        (list, listIndex) => listIndex != index - 1
      ),
    });
  }

  renderStocks(stocks, listIndex) {
    return stocks.map((stock, index) => {
      return (
        <RenderStock
          ticker={stock}
          stockIndex={index}
          listIndex={listIndex}
          userId={this.props.id}
        />
      );
    });
  }

  renderList() {
    return this.props.watchlists.map((list, index) => {
      return (
        <React.Fragment>
          <div className="relative flex flex-col justify-center items-center bg-secondary rounded-md mb-4 text-center w-96 md:w-1/2 lg:w-1/3 mx-auto">
            <div className="p-4">
              <div className="watchlist-header-container">
                <h1 className="text-3xl font-bold mb-2">{list.title}</h1>
                {list.description && (
                  <h2 className="text-lg font-bold">{list.description}</h2>
                )}
              </div>
              <WatchlistDelete
                listIndex={index}
                title={list.title}
                onDelete={() => this.deleteWatchlist(index)}
              />
            </div>

            <table className="table-auto ">
              <thead>
                <tr>
                  <th>Holding</th>
                  <th>Price</th>
                  <th>Price Change</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list.stocks && this.renderStocks(list.stocks, index)}
              </tbody>
            </table>
            <div className="flex flex-col py-6 px-4 w-full justify-center items-center">
              {this.state.openLists.includes(index) ? (
                <AddStockToWatchlist
                  onClick={this.onSubmit}
                  index={index}
                  form={"watchlist" + index}
                />
              ) : (
                <button
                  onClick={() => this.toggleStockInput(index)}
                  className="utility-button text-lg py-2 px-4 w-2/4"
                >
                  Add Stock
                </button>
              )}
            </div>
          </div>
          {list.stocks.length > 0 && (
            <LoadNewsButton stocks={list.stocks} listIndex={index} />
          )}
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          {this.props.watchlists && this.renderList(this.props.watchlists)}

          <Link to="/watchlist/create" className="utility-button w-full py-4">
            New watchlist
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    watchlists: state.user.watchlists,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  deleteWatchlist,
  deleteStock,
  addStockToWatchlist,
  getStockQuote,
})(WatchlistShow);
