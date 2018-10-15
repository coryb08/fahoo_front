import { combineReducers } from 'redux'
import { REHYDRATE } from 'redux-persist'
import {
  OFFCLICK,
  FAVORITESSUCCESS,
  ARTICLESUCCESS,
  USERSUCCESS,
  USERERROR,
  ARTICLES
} from '../types.js'
const defaultState = {
  payload: [],
  searchTerm: '',
  bool: false
}
//
// export default function() {
// 	switch ('HYDRATE') {
//     case "HYDRATE":
//       return { ...state, persistedState: action.payload}
//
//     default:
//       return state
//   }
// }

const articles = (state = defaultState, action) => {
  switch (action.type) {
    case ARTICLES:
      return {
        ...state,
        payload: action.payload,
        searchTerm: action.concat,
        bool: action.bool
      }

    default:
      return state
  }
}

const favorites = (state, action) => {
  switch (action.type) {
    case FAVORITESSUCCESS:
      return {
        ...state,
        articles: action.articles,
        status: action.status
      }
    default:
      return { ...state, status: false }
  }
}

const offClick = (state, action) => {
  switch (action.type) {
    case OFFCLICK:
      return {
        ...state,
        offClick: action.offClick
      }

    default:
      return { ...state, offClick: false }
  }
}

const users = (state, action) => {
  switch (action.type) {
    case USERSUCCESS:
      return {
        ...state,
        id: action.id,
        email: action.email,
        password: action.password,
        articles: action.articles,
        status: action.status,
        auth_token: action.auth_token
      }

    case USERERROR:
      return {
        ...state,
        error: action.error,
        status: action.status
      }
    default:
      return { state }
  }
}

export default combineReducers({ articles, offClick, users, favorites })
