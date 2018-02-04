import { createStore } from "redux";
import reducer from "./reducers/index";

export function configureStore() {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const store = configureStore();
