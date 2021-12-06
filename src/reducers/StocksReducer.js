const StocksReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_STOCK_QUOTE":
      return { ...state, [action.payload.index]: action.payload };

    default:
      return state;
  }
};

export default StocksReducer;
