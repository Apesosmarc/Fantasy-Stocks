export { googleSignIn, googleSignOut } from "./OAuth2";

export { guestSignIn, guestSignOut } from "./guestAuth";

export { fetchUser, createUser, loginUser, userExists } from "./users";

export {
  createWatchlist,
  deleteWatchlist,
  addStockToWatchlist,
  deleteStockFromWatchlist,
} from "./watchlists";

export { getStockQuote } from "./stocks";

export { getNews } from "./news";

export { getTheme, setDarkMode, setLightMode } from "./getTheme";

// export const guestSignIn = () => async (dispatch) => {
//   console.log("guestSignIn");
//   dispatch({
//     type: "GUEST_SIGN_IN",
//     payload: 1,
//   });
//   history.push("/1");
// };

// // Routes user back to homescreen
// export const guestSignOut = () => async (dispatch) => {
//   dispatch({
//     type: "GUEST_SIGN_OUT",
//     payload: null,
//   });

//   history.push(`/`);
// };

// // export const fetchUser = (userId) => async (dispatch) => {
// //   return await users
// //     .get(`/${userId}`)
// //     .then((response) => {
// //       dispatch({
// //         type: "FETCH_USER",
// //         payload: response.data,
// //       });
// //     })
// //     .catch(async (error) => {
// //       const response = await users.post("", {
// //         id: userId,
// //         watchlists: [],
// //       });

// //       dispatch({
// //         type: "CREATE_USER",
// //         payload: response.data,
// //       });
// //     });
// // };

// // export const createUser = (userId) => async (dispatch) => {};

// // export const fetchWatchlist = (id) => async (dispatch) => {
// //   const response = await users.get(`./users/${id}`);

// //   dispatch({
// //     type: "FETCH_WATCHLIST",
// //     payload: response.data,
// //   });
// // };

// // export const fetchWatchlists = () => async (dispatch) => {
// //   const response = await users.get("./users");

// //   dispatch({
// //     type: "FETCH_WATCHLISTS",
// //     payload: response.data,
// //   });
// // };

// // export const fetchState = () => async (dispatch) => {
// //   dispatch({
// //     type: "FETCH_STATE",
// //   });
// // };

// // export const deleteWatchlist = (id, index) => async (dispatch) => {
// //   const patched = await users.get(`/${id}`).then((response) => {
// //     const res = response;
// //     res.data.watchlists.splice(index, 1);
// //     return users.patch(`/${id}`, {
// //       ...res.data,
// //     });
// //   });

// //   dispatch({
// //     type: "DELETE_WATCHLIST",
// //     payload: patched.data,
// //   });
// // };

// // export const deleteStock = (id, listIndex, stockIndex) => async (dispatch) => {
// //   const patched = await users.get(`/${id}`).then((response) => {
// //     const res = response;
// //     res.data.watchlists[listIndex].stocks.splice(stockIndex, 1);
// //     return users.patch(`/${id}`, {
// //       ...res.data,
// //     });
// //   });

// //   dispatch({
// //     type: "DELETE_STOCK",
// //     payload: patched.data,
// //   });
// // };

// // export const createWatchlist = (formValues, id) => async (dispatch) => {
// //   const newWatchlist = {
// //     ...formValues,
// //     stocks: [],
// //   };

// //   const patched = await users.get(`/${id}`).then((response) =>
// //     users.patch(`/${id}`, {
// //       ...response.data,
// //       ...response.data.watchlists.push(newWatchlist),
// //     })
// //   );

// //   dispatch({
// //     type: "CREATE_WATCHLIST",
// //     payload: patched.data,
// //   });
// //   history.push(`/${id}`);
// // };

// // // Stock action creators

// // export const addStockToWatchlist = (ticker, index, id) => async (dispatch) => {
// //   const path = `/${id}`;
// //   const patched = await users.get(path).then((response) => {
// //     const res = response;
// //     res.data.watchlists[index].stocks.push(ticker);
// //     return users.patch(path, {
// //       ...res.data,
// //     });
// //   });

// //   dispatch({
// //     type: "ADD_STOCK_TO_WATCHLIST",
// //     payload: patched.data,
// //   });
// //   return patched;
// // };
