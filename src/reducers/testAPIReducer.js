export default (state = {}, action) => {
  switch (action.type) {
    case "TEST_FETCH_USER":
      return { ...state, currentUser: action.payload };
    case "TEST_CREATE_USER":
      return { ...state, ...action.payload };
    case "TEST_CREATE_WATCHLIST":
      return { ...state, ...action.payload };
    case "TEST_ADD_STOCK_TO_WATCHLIST":
      console.log(action.payload);
      return { ...state, currentUser: action.payload };
    case "TEST_DELETE_WATCHLIST":
      //filters out the deleted watchlist
      state.currentUser.watchlists = state.currentUser.watchlists.filter(
        (list) => {
          return list._id != action.payload;
        }
      );
      return { ...state };
    case "TEST_DELETE_STOCK_FROM_WATCHLIST":
      return { ...state, currentUser: action.payload };
    case "TEST_USER_EXISTS":
      return { ...state, userExists: { ...action.payload } };
    case "TEST_LOGIN_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
