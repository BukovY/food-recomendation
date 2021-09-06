import { combineReducers, createStore } from "redux";
import base from "./reducers/baseReducers";
import userData from "./reducers/userDataReducer";

const rootReducer = combineReducers({
  base,
  userData,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
