import { combineReducers } from "redux";

const searchSubmit = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload;

    default:
      return state;
  }
};

const articles = (state = [], action) => {
  switch (action.type) {
    case "ARTICLES":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({ searchSubmit, articles });
