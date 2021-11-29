import React from "react";
import { getUser } from "../actions/usersTest";

const test = () => {
  return (
    <button
      onClick={() => setSelected(!selected)}
      className="utility-button px-6 py-3"
    >
      Log In
    </button>
  );
};


const mapStateToProps = (state) => {
  return { userInfo: state.userInfo, currentUser: state.user };
};
export default connect(mapStateToProps, {
    getUser
})(test);
