import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import AddStockToWatchlist from "./AddStockToWatchlist";

import {
  deleteStock,
  deleteWatchlist,
  addStockToWatchlist,
  fetchUser,
} from "../../actions/";

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

  deleteWatchlist(index) {
    this.props.deleteWatchlist(this.props.id, index);

    // removes deleted array from array of opened lists
    this.setState({
      openLists: this.state.openLists.filter(
        (list, listIndex) => listIndex != index - 1
      ),
    });
  }

  deleteStock(listIndex, stockIndex) {
    this.props.deleteStock(this.props.id, listIndex, stockIndex);
  }

  onSubmit = (formValues, index) => {
    const ticker = formValues.ticker.toUpperCase();

    this.props.addStockToWatchlist(ticker, index, this.props.id);
  };

  renderStocks(stocks, listIndex) {
    return stocks.map((stock, index) => {
      return (
        <tr key={index}>
          <td>{stock}</td>
          <td>
            <button
              className="ui button red"
              onClick={() => this.deleteStock(listIndex, index)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  }

  renderList() {
    return this.props.watchlists.map((list, index) => {
      return (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div className="flex">
            <h2>{list.title}</h2>
            {list.description && <h4>{list.description}</h4>}
            <button
              onClick={() => this.deleteWatchlist(index)}
              className="ui button red"
            >
              X
            </button>
            <button
              onClick={() => this.toggleStockInput(index)}
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
              {list.stocks && this.renderStocks(list.stocks, index)}
              {this.state.openLists.includes(index) && (
                <AddStockToWatchlist
                  listId={index}
                  onSubmit={this.onSubmit}
                  index={index}
                  form={"watchlist" + index}
                />
              )}
            </tbody>
          </table>
          <Link to="/watchlist/create" className="ui button green">
            New watchlist
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="w-28 bg-primary">fasdfasdf</div>
        </div>
        {this.props.watchlists && this.renderList(this.props.watchlists)}
      </React.Fragment>
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
})(WatchlistShow);
