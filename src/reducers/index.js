import { combineReducers } from "redux"

const defaultState = {
  payload: [],
  searchTerm: "",
  bool: false
}

const defaultState1 = {
  type: "USER",
  payload: [
    {
      id: 1,
      username: "coryb08",
      password: "123",
      created_at: "2018-02-12T19:11:43.713Z",
      updated_at: "2018-02-12T19:11:43.713Z"
    }
  ]
}

let concat

const articles = (state = defaultState, action) => {
  switch (action.type) {
    case "ARTICLES":
      return {
        payload: action.payload,
        searchTerm: action.concat,
        bool: action.bool
      }

    default:
      return defaultState
  }
}

const user = (state, action) => {
  switch (action.type) {
    case "USER":
      return {
        payload: action.payload
      }

    default:
      return defaultState1
  }
}

export default combineReducers({ articles, user })
