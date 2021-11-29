export default (state = {}, action) => {
  switch (action.type) {
    case "TEST_FETCH_USER":
      return { ...state, ...action.payload };
    case "TEST_CREATE_USER":
      return { ...state, ...action.payload };
    case "TEST_CREATE_WATCHLIST":
      return { ...state, ...action.payload };
    case "TEST_ADD_STOCK_TO_WATCHLIST":
      return { ...state, ...action.payload };
    // case "TEST_DELETE_STOCK_FROM_WATCHLIST";

    // case "CREATE_USER":
    //   return {...state, [action.payload]}
    default:
      return state;
  }
};
