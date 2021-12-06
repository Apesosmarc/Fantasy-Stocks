const ThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_THEME":
      return { ...state, darkMode: action.payload };
    case "SET_LIGHT_MODE":
      return { ...state, darkMode: action.payload };
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export default ThemeReducer;
