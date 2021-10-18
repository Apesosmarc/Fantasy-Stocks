import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWatchlists, deleteWatchlist } from "../../actions/";

import NewWatchlist from "./NewWatchlist";

class WatchlistShow extends React.Component {
  componentDidMount() {
    this.props.fetchWatchlists();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
  }

  renderStocks(stocks) {
    stocks = Object.values(stocks);
    return stocks.map((stock, index) => {
      return (
        <tr key={index}>
          <td>{stock.ticker}</td>
          <td>{stock.boughtPrice}</td>
          <td>{stock.quantity}</td>
        </tr>
      );
    });
  }

  delete(id) {
    this.props.deleteWatchlist(id);
  }

  renderList() {
    const watchlists = Object.values(this.props.watchlists);
    return watchlists.map((list, index) => {
      return (
        <div key={list.id} style={{ marginBottom: "20px" }}>
          <div className="flex">
            <h3>{list.title}</h3>
            <button
              onClick={() => this.delete(list.id)}
              className="ui button red"
            >
              X
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
            <tbody>{list.stocks && this.renderStocks(list.stocks)}</tbody>
          </table>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Watchlists</h2>
        {this.renderList()}

        <Link to="/watchlist/create" className="ui button green">
          New watchlist
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    watchlists: state.watchlists,
  };
};

export default connect(mapStateToProps, { fetchWatchlists, deleteWatchlist })(
  WatchlistShow
);
