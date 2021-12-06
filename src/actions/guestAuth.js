import history from "../history";

export const guestSignIn = () => async (dispatch) => {
  dispatch({
    type: "GUEST_SIGN_IN",
    payload: 4442,
  });
  history.push("/4442");
};

// Routes user back to homescreen
export const guestSignOut = () => async (dispatch) => {
  dispatch({
    type: "GUEST_SIGN_OUT",
    payload: null,
  });

  history.push(`/`);
};
