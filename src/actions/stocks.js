import axios from "axios";
import history from "../history";
import iex from "../apis/iex";
import { SubmissionError } from "redux-form";

export const getStockQuote = (ticker) => async (dispatch) => {
  const response = await iex.get(`/stock/${ticker}/quote`).then((res) => {
    return {
      changePercent: (res.data.changePercent * 100).toFixed(2) + "%",
      currentPrice: res.data.iexRealtimePrice,
      companyFullName: res.data.companyName,
      avgVolume: res.data.avgTotalVolume,
    };
  });

  dispatch({
    type: "GET_STOCK_QUOTE",
    payload: response,
  });
};

export const searchStock = (ticker) => async (dispatch) => {};
