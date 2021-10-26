import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import {
  fetchWatchlist,
  fetchWatchlists,
  deleteWatchlist,
  addStockToWatchlist,
} from "../../actions/";
import AddStockToWatchlist from "../stocks/AddStockToWatchlist";

class WatchlistShow extends React.Component {
  state = {
    toggle: false,
    openLists: [],
  };

  componentDidMount() {
    this.props.fetchWatchlists();
  }

  toggleStockInput(id) {
    if (this.state.openLists.includes(id)) {
      return;
    }

    this.setState({
      openLists: [...this.state.openLists, id],
    });
  }

  delete(id) {
    this.props.deleteWatchlist(id);
  }

  onSubmit = (formValues, listId, index) => {
    const ticker = formValues.ticker.toUpperCase();
    this.props.addStockToWatchlist(ticker, listId, this.props.watchlists);
  };

  renderStocks(stocks) {
    return stocks.map((stock, index) => {
      return (
        <tr key={index}>
          <td>{stock}</td>
        </tr>
      );
    });
  }

  renderList() {
    return this.props.watchlists.map((list, index) => {
      return (
        <div key={list.id} style={{ marginBottom: "20px" }}>
          <div className="flex">
            <h2>{list.title}</h2>
            {list.description && <h4>{list.description}</h4>}
            <button
              onClick={() => this.delete(list.id)}
              className="ui button red"
            >
              X
            </button>
            <button
              onClick={() => this.toggleStockInput(list.id)}
              className="ui button green"
            >
              Add
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <td>TICKER</td>
                <td>PRICE</td>
                <td>SHARES</td>
              </tr>
            </thead>
            <tbody>
              {list.stocks && this.renderStocks(list.stocks)}
              {this.state.openLists.includes(list.id) && (
                <AddStockToWatchlist
                  listId={list.id}
                  onSubmit={this.onSubmit}
                  index={index}
                />
              )}
            </tbody>
          </table>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Watchlists</h2>
        {this.renderList(this.props.watchlists)}

        <Link to="/watchlist/create" className="ui button green">
          New watchlist
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    watchlists: Object.values(state.watchlists),
  };
};

export default connect(mapStateToProps, {
  deleteWatchlist,
  fetchWatchlist,
  fetchWatchlists,
  addStockToWatchlist,
})(WatchlistShow);
