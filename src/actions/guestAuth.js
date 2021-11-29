import _ from "lodash";
import history from "../history";

export const guestSignIn = () => async (dispatch) => {
  dispatch({
    type: "GUEST_SIGN_IN",
    payload: 1,
  });
  history.push("/1");
};

// Routes user back to homescreen
export const guestSignOut = () => async (dispatch) => {
  dispatch({
    type: "GUEST_SIGN_OUT",
    payload: null,
  });

  history.push(`/`);
};
