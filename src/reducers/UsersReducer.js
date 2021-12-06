const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, currentUser: action.payload };
    case "CREATE_USER":
      return { ...state, ...action.payload };
    case "CREATE_WATCHLIST":
      return { ...state, currentUser: action.payload };
    case "ADD_STOCK_TO_WATCHLIST":
      return { ...state, currentUser: action.payload };
    case "DELETE_WATCHLIST":
      return { ...state, currentUser: action.payload };
    case "DELETE_STOCK_FROM_WATCHLIST":
      return { ...state, currentUser: action.payload };
    case "USER_EXISTS":
      return { ...state, userExists: { ...action.payload } };
    case "LOGIN_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default usersReducer;
