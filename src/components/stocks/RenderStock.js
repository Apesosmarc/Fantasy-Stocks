import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
// Action Creators
import { getStockQuote } from "../../actions/stocks";
import { deleteStock } from "../../actions/index";
import { divide } from "lodash";

function RenderStock({
  stockQuote,
  getStockQuote,
  ticker,
  stockIndex,
  listIndex,
  userId,
  deleteStock,
}) {
  useEffect(async () => {
    // getStockQuote(ticker, stockIndex);
  }, []);
  return <div></div>;
  return (
    <React.Fragment>
      {stockQuote && (
        <tr className="text-center" key={stockIndex}>
          <td>{ticker}</td>
          <td>${stockQuote[stockIndex].currentPrice}</td>
          <td>{stockQuote[stockIndex].changePercent}</td>

          <td>
            <button
              className="p-5"
              onClick={() => deleteStock(userId, listIndex, stockIndex)}
            >
              X
            </button>
          </td>
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
  deleteStock,
})(RenderStock);
