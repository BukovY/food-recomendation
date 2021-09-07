import { combineReducers, createStore } from "redux";
import userData from "./reducers/userDataReducer";

const rootReducer = combineReducers({
  userData,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
