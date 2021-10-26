import watchlists from "../apis/watchlists";
import _ from "lodash";
import history from "../history";
import { actionTypes } from "redux-form";

export const signIn = (userId) => async (dispatch) => {
  userId = userId.slice(-4);
  dispatch({
    type: "SIGN_IN",
    payload: userId,
  });
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const fetchUser = (userId) => async (dispatch) => {
  return await watchlists
    .get(`./users/${userId}`)
    .then((response) => {
      dispatch({
        type: "FETCH_USER",
        payload: response.data,
      });
    })
    .catch(async (error) => {
      const response = await watchlists.post(`/users`, {
        id: userId,
        watchlists: [],
      });

      dispatch({
        type: "CREATE_USER",
        payload: response.data,
      });
    });
};

export const createUser = (userId) => async (dispatch) => {};

export const fetchWatchlist = (id) => async (dispatch) => {
  const response = await watchlists.get(`./watchlists/${id}`);

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

  dispatch({
    type: "DELETE_WATCHLIST",
    payload: id,
  });
};

export const createWatchlist = (formValues) => async (dispatch) => {
  const response = await watchlists.post("/watchlists", {
    ...formValues,
    stocks: [],
  });

  dispatch({
    type: "CREATE_WATCHLIST",
    payload: response.data,
  });
  history.push("/");
};

// Stock action creators

export const addStockToWatchlist = (ticker, listId) => async (dispatch) => {
  const path = `/watchlists/${listId}`;
  const posted = await watchlists.get(path).then((response) =>
    watchlists.patch(path, {
      ...response.data,
      ...response.data.stocks.push(ticker),
    })
  );

  dispatch({
    type: "ADD_STOCK_TO_WATCHLIST",
    payload: posted.data,
  });
};
