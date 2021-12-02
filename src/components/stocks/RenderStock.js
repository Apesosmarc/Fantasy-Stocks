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

  const redOrGreenText = (price) => {
    if (parseInt(price) > 0) return "text-green";
    return "text-red";
  };

  // if received props, check if market is closed used last close price, else use currentPrice
  if (stockQuote[stockIndex]) {
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
              redOrGreenText(stockQuote[stockIndex].changePercent) + "-500"
            }
          >
            ${stockQuote[stockIndex].currentPrice}
          </td>
          <td
            className={
              redOrGreenText(stockQuote[stockIndex].changePercent) + "-500"
            }
          >
            {stockQuote[stockIndex].changePercent}
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
        <div>loading...</div>
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
