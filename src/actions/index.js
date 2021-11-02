import users from "../apis/users";
import _ from "lodash";
import history from "../history";

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
  return await users
    .get(`/${userId}`)
    .then((response) => {
      dispatch({
        type: "FETCH_USER",
        payload: response.data,
      });
    })
    .catch(async (error) => {
      const response = await users.post("", {
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
  const response = await users.get(`./users/${id}`);

  dispatch({
    type: "FETCH_WATCHLIST",
    payload: response.data,
  });
};

export const fetchWatchlists = () => async (dispatch) => {
  const response = await users.get("./users");

  dispatch({
    type: "FETCH_WATCHLISTS",
    payload: response.data,
  });
};

// export const deleteWatchlist = (id) => async (dispatch) => {
//   await users.delete(`/${id}`);

//   dispatch({
//     type: "DELETE_WATCHLIST",
//     payload: id,
//   });
// };

export const fetchState = () => async (dispatch) => {
  dispatch({
    type: "FETCH_STATE",
  });
};

export const deleteWatchlist = (id, index) => async (dispatch) => {
  const patched = await users.get(`/${id}`).then((response) => {
    const res = response;
    res.data.watchlists.splice(index, 1);
    return users.patch(`/${id}`, {
      ...res.data,
    });
  });

  dispatch({
    type: "DELETE_WATCHLIST",
    payload: patched.data,
  });
};

export const deleteStock = (id, listIndex, stockIndex) => async (dispatch) => {
  console.log(id, listIndex, stockIndex);
  const patched = await users.get(`/${id}`).then((response) => {
    const res = response;
    res.data.watchlists[listIndex].stocks.splice(stockIndex, 1);
    return users.patch(`/${id}`, {
      ...res.data,
    });
  });

  dispatch({
    type: "DELETE_STOCK",
    payload: patched.data,
  });
};

export const createWatchlist = (formValues, id) => async (dispatch) => {
  const newWatchlist = {
    ...formValues,
    stocks: [],
  };

  const patched = await users.get(`/${id}`).then((response) =>
    users.patch(`/${id}`, {
      ...response.data,
      ...response.data.watchlists.push(newWatchlist),
    })
  );

  dispatch({
    type: "CREATE_WATCHLIST",
    payload: patched.data,
  });
  history.push("/");
};

// Stock action creators

export const addStockToWatchlist = (ticker, index, id) => async (dispatch) => {
  const path = `/${id}`;
  const patched = await users.get(path).then((response) => {
    const res = response;
    res.data.watchlists[index].stocks.push(ticker);
    console.log(res);
    return users.patch(path, {
      ...res.data,
    });
  });

  dispatch({
    type: "ADD_STOCK_TO_WATCHLIST",
    payload: patched.data,
  });
  return patched;
};
