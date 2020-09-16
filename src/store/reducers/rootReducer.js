import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { listReducer } from "./listReducer";
import { firestoreReducer } from "redux-firestore";
export const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer,
  firestore: firestoreReducer,
});
