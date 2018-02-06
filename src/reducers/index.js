import { combineReducers } from "redux";

const defaultState = { payload: "", bool: false };

const searchSubmit = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      console.log("state ", state);
      return { payload: action.payload, bool: action.bool };

    default:
      return defaultState;
  }
};

const articles = (state = [], action) => {
  console.log("in reducer ", action);
  switch (action.type) {
    case "ARTICLES":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({ searchSubmit, articles });
