import users from "../apis/users";
import history from "../history";

export const createWatchlist = (OAuthId, formValues) => async (dispatch) => {
  const newWatchlist = await users.post(`/watchlists/`, {
    OAuthId,
    formValues,
  });

  dispatch({
    type: "CREATE_WATCHLIST",
    payload: newWatchlist.data.result,
  });

  history.push(`/${OAuthId}`);
};

export const deleteWatchlist = (OAuthId, listId) => async (dispatch) => {
  const updatedUser = await users.delete(`/watchlists/${listId}`, {
    data: {
      OAuthId,
    },
  });

  dispatch({
    type: "DELETE_WATCHLIST",
    payload: updatedUser.data.result,
  });
};

export const addStockToWatchlist =
  (stock, listId, OAuthId) => async (dispatch) => {
    const updatedUser = await users.post(`/watchlists/${listId}`, {
      OAuthId,
      stock,
    });

    dispatch({
      type: "ADD_STOCK_TO_WATCHLIST",
      payload: updatedUser.data.result,
    });
  };

export const deleteStockFromWatchlist =
  (stock, listId, OAuthId) => async (dispatch) => {
    //deletes stock from list
    const user = await users.delete(
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
      type: "DELETE_STOCK_FROM_WATCHLIST",
      payload: user.data.result,
    });
  };
