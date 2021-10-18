import watchlists from "../apis/watchlists";

export const fetchWatchlist = () => async (dispatch) => {
  const response = await watchlists.get("./watchlists");

  dispatch({
    type: "FETCH_WATCHLIST",
    payload: response.data,
  });
};

export const fetchWatchlists = () => async (dispatch) => {
  const response = await watchlists.get("./watchlists");

  dispatch({
    type: "FETCH_WATCHLISTS",
    payload: response.data,
  });
};

export const deleteWatchlist = (id) => async (dispatch) => {
  await watchlists.delete(`/watchlists/${id}`);
  const response = await watchlists.get("./watchlists");

  console.log(response);
  dispatch({
    type: "DELETE_WATCHLIST",
    payload: [id, response.data],
  });
};

export const createWatchlist = () => async (dispatch) => {
  const response = await watchlists.post("./watchlists", {
    title: "Tech Watchlist",
    description: "tech holdings",
    stocks: [
      {
        ticker: "NEW",
        boughtPrice: 98.22,
        quantity: 200,
      },
      {
        ticker: "INTC",
        boughtPrice: 35.55,
        quantity: 500,
      },

      {
        ticker: "SMH",
        boughtPrice: 128.59,
        quantity: 100,
      },
    ],
  });

  dispatch({
    type: "CREATE_WATCHLIST",
    payload: response.data,
  });
};
