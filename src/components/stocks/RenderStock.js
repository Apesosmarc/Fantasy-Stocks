import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
// Action Creators
import { getStockQuote, deleteStockFromWatchlist } from "../../actions";

function RenderStock({
  stockQuote,
  getStockQuote,
  ticker,
  stockIndex,
  listId,
  OAuthId,
  deleteStockFromWatchlist,
}) {
  useEffect(() => {
    // action creator
    getStockQuote(ticker, stockIndex);
  }, []);

  const priceDirection = {
    isPositive: function () {
      if (parseInt(this.dailyChangePercent) > 0) return true;
      return false;
    },
    // returns style based on price
    greenOrRed: function () {
      return this.isPositive(this.dailyChangePercent)
        ? "text-green-500"
        : "text-red-500";
    },
    // adds + symbol to green day price change
    // negative dailyChangePercent already has '-' before number
    plusOrMinus: function () {
      return this.isPositive(this.dailyChangePercent)
        ? `+${this.dailyChangePercent}`
        : `${this.dailyChangePercent}`;
    },
  };

  // if received props...
  if (stockQuote[stockIndex]) {
    // shortens varName on price obj
    priceDirection.dailyChangePercent = stockQuote[stockIndex].changePercent;
    priceDirection.price = stockQuote[stockIndex].currentPrice;

    // if market is close, the currentPrice becomes the price the stock closed at
    if (stockQuote[stockIndex].latestSource === "Close") {
      stockQuote[stockIndex].currentPrice =
        stockQuote[stockIndex].previousClose;
    }
  }

  return (
    <React.Fragment>
      {stockQuote[stockIndex] ? (
        <tr className="text-center" key={stockIndex}>
          <td>{ticker}</td>
          <td
            className={
              // concats 'text-red'||'text-green' + '-500'
              priceDirection.greenOrRed()
            }
          >
            ${priceDirection.price}
          </td>
          <td className={priceDirection.greenOrRed()}>
            {priceDirection.plusOrMinus()}
          </td>

          <td>
            <button
              className="p-5"
              onClick={() => {
                deleteStockFromWatchlist(ticker, listId, OAuthId);
              }}
            >
              X
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>Loading...</td>
          <td></td>
          <td></td>
        </tr>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    stockQuote: state.stocks,
  };
};

export default connect(mapStateToProps, {
  getStockQuote,
  deleteStockFromWatchlist,
})(RenderStock);
