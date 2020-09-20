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
    case "SIGNUP_SUCCESS":
      console.log("SignUp Success");
      return { ...state, authErr: null };
    case "SIGNUP_ERROR":
      console.log("SIgnUp Error");
      return {
        ...state,
        authErr: action.err.message,
      };
    case "PASS_RESET":
      alert("Email sent!");
      return state;
    case "PASS_RESET_ERROR":
      console.log("Reset Error");
      alert(action.err.message);
      return {
        ...state,
        authErr: action.err.message,
      };
    case "URL":
      console.log("File Uploaded");
      alert("File uploaded");
      return { ...state, authErr: null };
    case "URL_ERROR":
      console.log("File Uploaded");
      //alert("Upload failed");
      return { ...state, authErr: null };
    default:
      return state;
  }
};
