import axios from "axios";
import history from "../history";

// export const getStockQuote = (ticker, stockIndex) => async (dispatch) => {
//   const response = await iex.get(`/stock/${ticker}/quote`).then((res) => {
//     console.log(res);
//     return {
//       changePercent: (res.data.changePercent * 100).toFixed(2) + "%",
//       currentPrice: res.data.iexRealtimePrice,
//       companyFullName: res.data.companyName,
//       avgVolume: res.data.avgTotalVolume,
//       index: stockIndex,
//     };
//   });

//   dispatch({
//     type: "GET_STOCK_QUOTE",
//     payload: response,
//   });
// };
export const getStockQuote = (ticker, stockIndex) => async (dispatch) => {
  const response = null;

  dispatch({
    type: "GET_STOCK_QUOTE",
    payload: response,
  });
};

export const searchStock = (ticker) => async (dispatch) => {};
