import usersTest from "../apis/usersTest";
import _ from "lodash";
import history from "../history";

export const test_fetchUser = (userId) => async (dispatch) => {
  const user = await usersTest.get(`/users/${userId}`);

  dispatch({
    type: "TEST_FETCH_USER",
    payload: user,
  });
};

export const test_createUser = (OAuthId) => async (dispatch) => {
  const response = await usersTest.post("/users", {
    OAuthId,
  });

  dispatch({
    type: "TEST_CREATE_USER",
    payload: response,
  });
};

export const test_userExists = (userId) => async (dispatch) => {
  const doesUserExist = await usersTest.get("users", {
    userId,
  });

  return doesUserExist.data.doesExist;
};

export const test_createWatchlist =
  (formValues, userId) => async (dispatch) => {
    const newWatchList = usersTest.post(`/watchlists/`, {
      userId,
      formValues,
    });

    // this may or may not need to return the added watchlist

    dispatch({
      type: "CREATE_WATCHLIST",
      dispatch: newWatchList,
    });
  };

export const test_addStockToWatchList =
  (ticker, index, listId, userId) => async (dispatch) => {
    const updatedList = await usersTest.patch(`/watchlists/${listId}`, {
      userId,
      ticker,
    });

    dispatch({
      type: "TEST_ADD_STOCK_TO_WATCHLIST",
      payload: updatedList.data,
    });
    // return updatedList.data
  };

export const test_deleteStockFromWatchlist =
  (ticker, index, userId, listId) => async (dispatch) => {
    const updatedList = await usersTest.delete(`/stocks/${listId}`, {
      userId,
      ticker,
    });

    dispatch({
      type: "TEST_DELETE_STOCK_FROM_WATCHLIST",
      payload: updatedList.data,
    });
  };
// export const fetchWatchlist = (id) => async (dispatch) => {
//   const response = await users.get(`./users/${id}`);

//   dispatch({
//     type: "FETCH_WATCHLIST",
//     payload: response.data,
//   });
// };
