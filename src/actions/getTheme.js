const DOMlightMode = () => {
  document.documentElement.classList.remove("dark");

  window.localStorage.setItem("darkMode", false);
  document.documentElement.classList.add("light");
};

const DOMdarkMode = () => {
  document.documentElement.classList.remove("light");
  window.localStorage.setItem("darkMode", true);
  document.documentElement.classList.add("dark");
};

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("darkMode");
    if (storedPrefs) {
      if (storedPrefs === "false") {
        DOMlightMode();
        return false;
      }
      if (storedPrefs === "true") {
        return true;
      }
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return true;
    }
  }

  if (window.localStorage.length === 0) {
    localStorage.setItem("darkMode", true);
    return true;
  }
};

// THEME ACTION CREATORS

export const getTheme = () => (dispatch) => {
  const theme = getInitialTheme();

  dispatch({
    type: "GET_THEME",
    payload: theme,
  });
};

export const setLightMode = (theme) => (dispatch) => {
  DOMlightMode();
  dispatch({
    type: "SET_LIGHT_MODE",
    payload: false,
  });
};

export const setDarkMode = (theme) => (dispatch) => {
  DOMdarkMode();
  dispatch({
    type: "SET_DARK_MODE",
    payload: true,
  });
};
