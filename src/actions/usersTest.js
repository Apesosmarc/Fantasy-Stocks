import usersTest from "../apis/usersTest";
import _ from "lodash";

export const test_fetchUser = (userId) => async (dispatch) => {
  const response = await usersTest.get(`/users/${userId}`);

  dispatch({
    type: "TEST_FETCH_USER",
    payload: response.data.user,
  });
};

export const test_createUser = (OAuthId) => async (dispatch) => {
  const response = await usersTest.post("/users", {
    OAuthId,
  });

  dispatch({
    type: "TEST_CREATE_USER",
    payload: response.data,
  });
};

export const test_loginUser = (OAuthId) => async (dispatch) => {
  const response = await usersTest.post("/users", {
    OAuthId,
  });
  console.log(response);
  dispatch({
    type: "TEST_LOGIN_USER",
    payload: response.data,
  });
};

export const test_userExists = (OAuthId) => async (dispatch) => {
  const doesUserExist = await usersTest.get(`/users?id=${OAuthId}`);
  console.log(doesUserExist);

  dispatch({
    type: "TEST_USER_EXISTS",
    payload: doesUserExist.data.doesExist,
  });
};

export const test_createWatchlist =
  (OAuthId, formValues) => async (dispatch) => {
    const newWatchList = usersTest.post(`/watchlists/`, {
      OAuthId,
      formValues,
    });

    // this may or may not need to return the added watchlist

    dispatch({
      type: "CREATE_WATCHLIST",
      payload: newWatchList,
    });
  };

export const test_deleteWatchlist = (OAuthId, listId) => async (dispatch) => {
  const response = usersTest.delete(`/watchlists/${listId}`, {
    data: {
      OAuthId,
    },
  });

  dispatch({
    type: "TEST_DELETE_WATCHLIST",
    payload: listId,
  });
};

export const test_addStockToWatchList =
  (stock, listId, OAuthId) => async (dispatch) => {
    const updatedList = await usersTest.post(`/watchlists/${listId}`, {
      OAuthId,
      stock,
    });

    dispatch({
      type: "TEST_ADD_STOCK_TO_WATCHLIST",
      payload: updatedList.data.result,
    });
  };

export const test_deleteStockFromWatchlist =
  (stock, listId, OAuthId) => async (dispatch) => {
    //deletes stock from list
    const user = await usersTest.delete(
      `/stocks/${listId}`,
      {
        data: {
          OAuthId,
          stock,
        },
      },
      { new: true }
    );

    dispatch({
      type: "TEST_DELETE_STOCK_FROM_WATCHLIST",
      payload: user.data.result,
    });
  };
