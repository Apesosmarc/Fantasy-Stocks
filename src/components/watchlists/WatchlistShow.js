import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
//Components
import AddStockToWatchlist from "./AddStockToWatchlist";
import LoadNewsButton from "../news/LoadNewsButton";
import RenderStock from "../stocks/RenderStock";
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
    ticker = ticker.toUpperCase();

    const result = this.props.getStockQuote(ticker);

    console.log(result);

    // this.props.addStockToWatchlist(ticker, index, this.props.id);
    // serverValidation = (formValues) => {
    //   const ticker = formValues.ticker;

    //   const response = this.props.addStockToWatchlist(ticker, index, this.props.id);
  };

  //       return await iex.get(`/stock/${ticker}/quote`).then((res) => {
  //         const ticker = formValues.ticker.toUpperCase
  //       }).catch((error) => {
  //         if (error.response.status === 404) {
  //           throw new SubmissionError({
  //             ticker: "Ticker not found",
  //             _error: "ticker not found",
  //           });
  //         }
  //       });
  // ;
  //         const ticker = formValues.ticker.toUpperCase();

  //         this.props.addStockToWatchlist(ticker, index, this.props.id);

  //   }

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
          <div className="relative flex flex-col justify-center items-center bg-secondary rounded-md mb-4 text-center">
            <div className=" w-11/12 p-4">
              <div className="watchlist-header-container">
                <h1 className="text-3xl font-bold mb-2">{list.title}</h1>
                {list.description && (
                  <h2 className="text-lg font-bold">{list.description}</h2>
                )}
              </div>

              <button
                onClick={() => this.deleteWatchlist(index)}
                className="utility-button absolute right-4 top-4  py-1 px-2"
              >
                X
              </button>
            </div>

            <table className="table-auto w-full">
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
                  listId={index}
                  onClick={this.onSubmit}
                  index={index}
                  form={"watchlist" + index}
                />
              ) : (
                <button
                  onClick={() => this.toggleStockInput(index)}
                  className="utility-button text-2xl py-2 px-4 w-1/4"
                >
                  Add Stock
                </button>
              )}
            </div>
          </div>
          <LoadNewsButton />
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="mx-auto w-96 lg:w-8/12">
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
