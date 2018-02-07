import { combineReducers } from "redux";

const defaultState = {
  payload: [],
  searchTerm: "",
  bool: false
};

let concat;

const articles = (state = [], action) => {
  switch (action.type) {
    case "ARTICLES":
      return {
        payload: action.payload,
        searchTerm: action.concat,
        bool: action.bool
      };

    default:
      return defaultState;
  }
};

export default combineReducers({ articles });
