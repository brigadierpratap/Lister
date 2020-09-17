const initState = {
  authErr: null,
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log(action.err + "Login error");
      return { ...state, authErr: "Login Failed!" };
    case "LOGIN_SUCCESS":
      console.log("Success");
      return { ...state, authErr: null };
    case "SIGNOUT_SUCCESS":
      console.log("SignOut Success");
      return state;
    case "SIGNOUT_ERROR":
      console.log("Signout failed!");
      return { ...state, authErr: action.err };
    default:
      return state;
  }
};
