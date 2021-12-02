import history from "../history";

export const googleSignIn = (userId) => async (dispatch) => {
  userId = userId.slice(-4);
  dispatch({
    type: "SIGN_IN",
    payload: userId,
  });
  history.push(`/${userId}`);
};

export const googleSignOut = () => async (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
  });

  history.push("/");
};
