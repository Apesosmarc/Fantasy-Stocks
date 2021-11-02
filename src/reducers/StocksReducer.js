export default (state = {}, action) => {
  switch (action.type) {
    case "GET_STOCK_QUOTE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
