import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers/index";
import thunk from "redux-thunk";

export function configureStore() {
  return createStore(combineReducers, applyMiddleware(thunk));
}

export const store = configureStore();
