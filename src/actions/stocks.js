import iex from "../apis/iex";

export const getStockQuote = (ticker, stockIndex) => async (dispatch) => {
  const response = await iex.get(`/stock/${ticker}/quote`).then((res) => {
    return {
      changePercent: (res.data.changePercent * 100).toFixed(2) + "%",
      currentPrice: res.data.iexRealtimePrice,
      companyFullName: res.data.companyName,
      avgVolume: res.data.avgTotalVolume,
      index: stockIndex,
      latestSource: res.data.latestSource,
      previousClose: res.data.previousClose,
    };
  });

  dispatch({
    type: "GET_STOCK_QUOTE",
    payload: response,
  });
};
